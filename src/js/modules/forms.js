const forms = () => {

    const form = document.querySelectorAll('form'),
          msg = {
            success: 'assets/img/ok.png',
            download: 'assets/img/spinner.gif',
            fail: 'assets/img/fail.png'
          };

    form.forEach(item => {
        item.classList.add('animated');
        //item.parentNode.style.overflow = 'hidden';
        bindForms(item);
    });



    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        let error = new Error();
        if (!res.ok){
            throw error;
        }

        return await res.text();
    };

    function bindForms(form) {

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const div = document.createElement('div'),
                  img = document.createElement('img');

            img.setAttribute('src', msg.download);
            img.style.cssText = `width: 50px; transform: translate(-50%, -50%);`;
            div.append(img);
            div.style.cssText = `position: absolute; top: 50%; left: 50%;`;
            
            form.style.position = 'relative';
            form.append(div);

            const formData = new FormData(form);

            postData('assets/server.php', formData)
            .then(() => {
                div.remove();
                creatMsgStatus(form, msg.success);
            })
            .catch((e) => {
                div.remove();
                creatMsgStatus(form, msg.fail);
            })
            .finally(() => {
                form.reset();
            });            
        });

    }

    function creatMsgStatus(form, msg) {
        const div = document.createElement('div'),
              img = document.createElement('img');
              
        img.setAttribute('src', msg);
        img.setAttribute('alt', 'Произошла ошибка');
        div.append(img);
        form.classList.add('fadeOutDown');
        setTimeout(() => {
            form.style.display = 'none';
            form.after(div);
        }, 500);
        setTimeout(() => {
            div.remove();
            form.classList.remove('fadeOutDown');
            form.classList.add('fadeInDown');
            form.style.display = 'block';
            
        }, 3000);
    }
};

export default forms;