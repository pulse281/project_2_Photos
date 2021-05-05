const forms = (calcArgs) => {

    const form = document.querySelectorAll('form'),
          msg = {
            success: 'assets/img/ok.png',
            download: 'assets/img/spinner.gif',
            fail: 'assets/img/fail.png'
          },
          fileInputs = document.querySelectorAll('[type="file"]'),
          fileInputsLabels = document.querySelectorAll('.file_upload div'),
          calcArea = document.querySelector('.calc-price');
          
    form.forEach(item => {
        item.classList.add('animated');
        //item.parentNode.style.overflow = 'hidden';
        bindForms(item);
    });


    function changeUploadStatus() {
        fileInputs.forEach((item, i) => {
            item.addEventListener('input', (e) => {
             const file = item.files[0].name.split('.');
     
             let   fileName = file[0],
                   fileCoder = file[1];
     
             if (fileName.length > 6) {
                 fileName = fileName.slice(0, 5) + '..';
             }
             if (file.length == 1) {
                 fileCoder = ' ';
             }
     
             console.log(fileName + '.' + fileCoder);
             fileInputsLabels[i].textContent = `${fileName}.${fileCoder}`;
     
            });
         });
    }
    changeUploadStatus();

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
                creatMsgStatus(form, msg.success, 'Отправлено');
            })
            .catch((e) => {
                div.remove();
                creatMsgStatus(form, msg.fail, 'Произошла ошибка');
            })
            .finally(() => {
                form.reset();
                fileInputsLabels.forEach(label => {
                    label.textContent = 'Файл не выбран';
                });
                calcArea.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
                for (let key in calcArgs) {
                    calcArgs[key] = '';
                }
            });  
        });

    }

    function creatMsgStatus(form, msg, alt) {
        const div = document.createElement('div'),
              img = document.createElement('img');
              
        img.setAttribute('src', msg);
        img.setAttribute('alt', alt);
        div.style.textAlign = 'center';
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