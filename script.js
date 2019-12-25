  // 	Ім’я та прізвище: може бути слово англійською з великої або маленької букви і не більше 20. Цифр і інші символи не допускаються.
    // 	Емейл: обов'язково @. Усі букви повинні бути англійською. Загальні вимоги наступні(будь-яка кількість букв, цифр, тире і 
    //      крапок@будьяка кількість букв.( net.ua, org.ua, gmail.com.  і т.д.)).
    // 	Телефон: повинен пройти тільки такий формат: +38(093)-880-20-13. Розділові знаки в номері повинні ставитись автоматично після заповнення
    //      певної кількості цифр. Можна використати готову маску для телефона.
    // 	Пароль: Від 8 до 15 символів з мінімум однією цифрою, однією великою і однієї малої буквою.


$(document).ready(function () {
    const getID = id => document.getElementById(id);
    const getSel = sel => document.querySelector(sel);
    let form = document.forms.form;
    let firstName = form.firstName;
    let lastName = form.lastName;
    let email = form.email;
    let phone = form.phoneNumber;
    let password = form.password;

    $('.comment').hide();
    $('#phoneNumber').mask("+38(099)-999-99-99");


    $('.signUp').click(function () {
        if (/^([a-zA-Z])([a-z]{1,19})$/.test(`${firstName.value}`)) {
            $('#firstName').siblings('span').show().html('<i class="fas fa-check"></i>');
            $('#commentFirstName').hide();
            $('#firstName').css('border', '2px inset green');
            $('input').css('margin', '5px 0');

        } else {
            $('#firstName').siblings('span').show().html('<i class="fas fa-times"></i>');
            $('#firstName').css('border', '2px inset red');
            $('#commentFirstName').show();
            $('input').css('margin', '5px 0');
        }

        if (/^([a-zA-Z])([a-z]{1,19})$/.test(`${lastName.value}`)) {
            $('#lastName').siblings('span').show().html('<i class="fas fa-check"></i>');
            $('#commentLastName').hide();
            $('#lastName').css('border', '2px inset green');
        } else {
            $('#lastName').siblings('span').show().html('<i class="fas fa-times"></i>');
            $('#lastName').css('border', '2px inset red');
            $('#commentLastName').show();
        }


        if (/^[a-zA-Z0-9-.]+\@{1}[a-z.]+$/.test(`${email.value}`)) {
            $('#email').siblings('span').show().html('<i class="fas fa-check"></i>');
            $('#commentEmail').hide();
            $('#email').css('border', '2px inset green');
        } else {
            $('#email').siblings('span').show().html('<i class="fas fa-times"></i>');
            $('#email').css('border', '2px inset red');
            $('#commentEmail').show();
        }

        if ($('#phoneNumber').val() == '') {
            $('#phoneNumber').siblings('span').show().html('<i class="fas fa-times"></i>');
            $('#phoneNumber').css('border', '2px inset red');
            $('#commentPhoneNumber').show();
        } else {
            $('#phoneNumber').siblings('span').show().html('<i class="fas fa-check"></i>');
            $('#commentPhoneNumber').hide();
            $('#phoneNumber').css('border', '2px inset green');
        }


        if (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])\S{8,15}$/.test(`${password.value}`)) {
            $('#password').siblings('span').show().html('<i class="fas fa-check"></i>');
            $('#commentPassword').hide();
            $('#password').css('border', '2px inset green');
        } else {
            $('#password').siblings('span').show().html('<i class="fas fa-times"></i>');
            $('#password').css('border', '2px inset red');
            $('#commentPassword').show();
        }
    })



});