import React, {useState} from 'react';
import {Helmet} from "react-helmet";
import {
    AiOutlineUser,
    BsCashCoin,
    BsFillQuestionCircleFill,
    FaUserCheck,
    GiArchiveRegister,
    GiCash,
    GiPresent,
    MdSportsSoccer
} from "react-icons/all";
import ContentBlock from "../ContentBlock";
import Accordion from "../Accordion";
import {useTranslation} from "react-i18next";

const Faq = () => {
    const { t } = useTranslation();

    const faqs = [
        {
            name: 'Регистрация',
            icon: <GiArchiveRegister />,
            questions: [
                {
                    question: 'Как зарегистрироваться на вашем сайте?',
                    answer: 'Чтобы зарегистрироваться в «'+process.env.REACT_APP_NAME+'», необходимо нажать на кнопку «Регистрация за 10 секунд» в верхнем правом углу сайта.\n' +
                        '\n' +
                        'После этого следует заполнить необходимые поля. Вы можете зарегистрировать аккаунт, используя электронный адрес или номер своего мобильного телефона. Пожалуйста, указывайте свои точные данные. В дальнейшем это поможет быстрее оформить ваш первый вывод средств.\n' +
                        '\n' +
                        'Придумайте надежный пароль, состоящий как минимум из 6 символов: используйте буквы, цифры и специальные знаки.\n' +
                        '\n' +
                        'Также на нашем сайте можно зарегистрироваться с помощью аккаунта Gmail.'
                },
                {
                    question: 'Сколько аккаунтов можно регистрировать на сайте?',
                    answer: 'На сайте «'+process.env.REACT_APP_NAME+'» вы можете открыть только один счет.\n' +
                        '\n' +
                        'Для одного игрока, почтового или IP-адреса, компьютера или другого устройства, а также для одного телефонного номера разрешено иметь только один аккаунт.\n' +
                        '\n' +
                        'Если вам не удается восстановить доступ к аккаунту, не стоит регистрироваться снова. Обратитесь в онлайн-чат, наши специалисты с удовольствием вам помогут.'
                }
            ]
        },
        {
            name: 'Профиль',
            icon: <AiOutlineUser />,
            questions: [
                {
                    question: 'У меня возникли трудности со входом в аккаунт, что делать?',
                    answer: `Наша команда постоянно трудится для вашего комфорта. Однако, при входе в аккаунт могут возникнуть некоторые сложности:

                    1.  «Неправильный логин или пароль. Попробуйте еще раз.». Чаще всего эта ошибка возникает тогда, когда вы неправильно вводите данные для входа на сайт (пароль или логин). Если вам не удается вспомнить правильные данные, пожалуйста, нажмите на кнопку «Забыли пароль» и следуйте инструкциям.

    2.  Ошибка «Попробуйте позже». Эта ошибка может появиться, если вы многократно введете логин или пароль неправильно. Она устраняется довольно просто: нужно очистить кеш и куки Вашего браузера. После этого перезагрузите страницу и попробуйте войти повторно.

    3.  «Сайт загружается, но вход в аккаунт не происходит». Попробуйте открыть новую вкладку браузера в режиме «Инкогнито» и перейти по ссылке ${process.env.REACT_APP_URL}`
                },
                {
                    question: 'Как сменить или восстановить пароль?',
                    answer: `Нет, ставки делать не нужно

1. Создайте аккаунт на сайте Cоsmolot и внесите депозит

2. Найдите тематический баннер на главной странице сайта и ответьте на вопросы

3. Ваш выигрыш зависит от количества правильных ответов`
                },
                {
                    question: 'Как подтвердить номер телефона?',
                    answer: `Если вы регистрировались по номеру телефона, то система автоматически проверит ваш номер через смс с паролем-подтверждением.

Если вы регистрировались по email, для вывода средств понадобится подтвердить ваш номер телефона. Чтобы подтвердить свой номер телефона перейдите во вкладку «Личный кабинет», введите номер и нажмите на кнопку «Подтвердить». После этого появится строка для ввода кода подтверждения, который будет отправлен через смс. Иногда код приходит в течение некоторого времени.

Если код подтверждения не пришел, пожалуйста, проверьте следующее:

1.  Не был ли ваш номер ранее зарегистрирован на другом аккаунте? Для уточнения обратитесь в онлайн-чат нашей службы клиентской поддержки, где вам обязательно помогут.

2.  Не ввели ли вы номер с ошибкой? Пожалуйста, внимательно проверяйте данные, которые вводите. Если вы регистрировали аккаунт по почте, вы сможете заменить свой номер телефона, если он не подтвержден.`
                },
                {
                    question: 'Как подтвердить почту?',
                    answer: `Чтобы подтвердить почту нужно перейти во вкладку «Личный кабинет», ввести адрес электронной почты, к которой вы имеете доступ и нажать кнопку «Подтвердить». На указанную почту придет письмо c  кодом. Этот код нужно будет ввести в окошки ниже и нажать подтвердить.

Если вы не получили письмо, пожалуйста, проверьте также папки «Спам», «Заблокированные» и «Промоакции». Если письмо не оказалось и там, обратитесь в онлайн-чат нашей службы клиентской поддержки`
                },
                {
                    question: 'Как сменить телефон или почту?',
                    answer: `В целях сохранения ваших данных, сменить номер или электронную почту самостоятельно невозможно. Если Вам необходимо изменить эту информацию, пожалуйста, обратитесь в онлайн-чат нашей службы клиентской поддержки. Наши специалисты попросят вас написать старые и новые электронную почту или телефонный номер. Кроме того, будет необходимо ответить на ряд вопросов.

Это сделано для того, чтобы не оставить у оператора сомнений, что вы это вы. Как только служба клиентской поддержки удостоверится, что вы – владелец аккаунта, нужная информация профиля будет изменена.`
                },
            ]
        },
        {
            name: 'Пополнение',
            icon: <BsCashCoin />,
            questions: [
                {
                    question: 'Как пополнить счет?',
                    answer: `Вы можете пополнить счет разными способами: Visa/Mastercard, ApplePay, MasterPass, Терминали iBox, Система.
                    Для пополнения счета в разделе «Касса» Выберите вкладку «Пополнение» и укажите способ, с помощью которого вы хотите пополнить счет.
        Для пополнения нужно:

        •  VISA и MasterCard: указать сумму пополнения (например, 500 грн.) и ввести реквизиты вашей банковской карты:

        1. 16-значный код вашей карты;
    2. Дата окончания срока действия вашей карты в формате ММ/ГГ;
    3. CCV2 – код из трех цифр, указанный на обороте Вашей карты.
    4. Нажать на кнопку «Пополнить»

•  Терминали iBox, Система : необходимо узнать ID своего аккаунта. Посмотреть ID можно в информации вашего профиля, или узнать в онлайн-чате нашей службы клиентской поддержки. В разделе «Касса» при выборе терминала вам будет предоставлена подробная, пошаговая инструкция.`
                },
                {
                    question: 'У меня возникли трудности при пополнении, что делать?',
                    answer: `Трудности с пополнением счета могут возникнуть по нескольким причинам:

  •  На вашей банковской карте может быть отключена услуга платежей в интернете;
  •  На вашей банковской карте мог быть превышен лимит оплаты в интернете;
  •  На вашей банковской карте может быть отключена система безопасности 3D-Secure;
  •  На балансе вашей банковской карты может быть недостаточно средств;

    В случае неуспешного пополнения счета, пожалуйста, проверьте информацию о вашей банковской карте, либо свяжитесь с представительством вашего банка. В свою очередь, мы проверим все возможные причины с нашей стороны.`
                }
            ]
        },
        {
            name: 'Вывод средств',
            icon: <GiCash />,
            questions: [
                {
                    question: 'Как вывести средства?',
                    answer: `Для того, чтобы оформить запрос на выведение средств, вам нужно:

  •  Перейти в раздел «Касса»;
  •  Перейти во вкладку «Вывод»;
  •  Указать метод вывода: VISA/MasterCard;
  •  Ввести реквизиты вашей банковской карты.`
                },
                {
                    question: 'Условия вывода средств',
                    answer: `Вывод средств на Вашу банковскую карту возможен только на гривневый счет украинского банка. Если вы желаете воспользоваться новой банковской картой, с нее необходимо внести минимальный депозит от 50 грн.
Также:

  •  Лимит вывода  - от 100 грн до 4999 за одну транзакцию;
  •  При выводе вы отказываетесь от бонусов;

 Для вывода средств со счета в разделе «Личный кабинет» необходимо подтвердить номер телефона и электронную почту. В течении некоторого времени вам будет предложено верифицировать аккаунт фотографиями ваших документов.

Все это – защитные меры против возможного мошенничества, которые призваны уберечь вас и ваши деньги.`
                },
                {
                    question: 'Ошибка «Вывод возможен только на карту, с которой был сделан депозит»',
                    answer: `Ошибка при попытке выведения средств означает, что с указанной банковской карты ранее не пополняли счет. Она может возникнуть, если вы использовали терминалы оплаты, мобильных операторов или онлайн-кошельки, и пытаетесь вывести средства на банковскую карту, которая раньше не была замечена в нашей системе.

Во избежание такой ошибки с этой банковской карты нужно внести депозит, выбрав метод оплаты VISA/MasterCard. Также стоит отметить, что при использовании системы Apple Pay создается виртуальная карта, номер которой не соответствует фактическому номеру вашей реальной карты. Пожалуйста, будьте осторожны.`
                },
                {
                    question: 'Как получить выписку банковской карты?',
                    answer: `Для пользователей Приватбанка: Откройте приложение «Приват24», и сделайте скриншот карты в разделе «Мои реквизиты». Для этого в разделе «Все услуги», нажмите на вкладку «Инфо», после откройте раздел «Мои реквизиты», далее «Наличными в украинских банках» и выберите карту, которую вам нужно отправить.

Для пользователей Монобанка: Откройте приложение «Монобанк», далее проведите влево по экрану, чтобы открыть страницу с реквизитами карты. Опуститесь вниз и выберите в списке пункт «Отправить выписку по карте».`
                },
                {
                    question: 'Где увидеть, сколько средств доступно для вывода?',
                    answer: `Информацию о том, сколько средств сейчас находится на вашем счету, а также сколько из них доступно для вывода, можно найти в верхней панели сайта, рядом с иконкой профиля. Изначально в строчке «На счете» Ваши реальные и бонусные средства показаны одной объединенной суммой. В строчке «Для вывода» указана сумма, которую вы можете вывести.`
                },
                {
                    question: 'Что такое налоги?',
                    answer: `Налог (сбор) – это обязательный платеж, взимаемый с плательщиков такого налога (сбора). Одним из случаев, когда должны быть удержаны такие платежи, является выплата суммы выигрыша на банковский счет игрока. В этом случае из суммы перечисляемых средств обязательно должен быть уплачен налог на доходы физического лица (ставка 18 %) и военный сбор (ставка 1,5 %). При чем, эти обязательные платежи перечисляет в бюджет организатор азартных игр на этом сайте, который действует в качестве налогового агента игрока. В случае нарушения организатором азартных игр на этом вебсайте указанной обязанности, с него взимается штраф в размере 10% от суммы неуплаченных налогов и сборов.`
                },
                {
                    question: 'Почему я плачу налог?',
                    answer: `Согласно Налоговому кодексу Украины, плательщиками налога на доходы физических лиц и военного сбора являются, в частности, лицо, получающее доходы из источника их происхождения в Украине. Налогообложение доходов в виде выигрышей и призов осуществляется в общем порядке. Организацией, которая во время начисления (выплаты, предоставления) в пользу плательщика налога дохода в виде выигрышей (призов) перечисляет причитающиеся к уплате налоги и сборы в бюджет, является компания, осуществляющая деятельность по организации и проведению азартных игр казино на вебсайте ${process.env.REACT_APP_URL} - общество с ограниченной ответственностью «СПЕЙСИКС» (идентификационный код юридического лица: 43635954, местонахождение: Украина, 04112, город Киев, ул. Сикорского Игоря авиаконструктора, дом 8, офис 5).`
                },
                {
                    question: 'Как рассчитываются налоги?',
                    answer: `Согласно Налоговому кодексу Украины, ставка налога на доходы физических лиц составляет 18 процентов, а военного сбора - 1,5 процента базы налогообложения относительно доходов, начисленных (выплаченных, предоставленных), которые начисляются (выплачиваются, предоставляются) плательщику в связи с гражданско-правовыми договорами (Каков, в частности, и договор на проведение азартной игры на вебсайте ${process.env.REACT_APP_URL}). Налог уплачивается (перечисляется) в бюджет при выплате налогооблагаемого дохода (во время каждого "вывода" средств) единым платежным документом.`
                },
            ]
        },
        {
            name: 'Бонусы',
            icon: <GiPresent />,
            questions: [
                {
                    question: 'Где можно найти бонусы?',
                    answer: `Бонусы – это всегда приятно. Бонусы делают людей счастливее. Мы счастливы только тогда, когда счастливы наши игроки.
Информацию о бонусах вы можете найти:

  •  В электронных письмах от нашей команды;
  •  На главном баннере нашего сайта и в разделе «Бонусы»;
  •  В смс-сообщениях, которые могут приходить на указанный вами номер телефона.`
                },
                {
                    question: 'Как активировать бонус?',
                    answer: `Для получения бонуса Вам нужно:

  •  Перейдите в раздел "Касса";
  •  Внесите сумму (указанную в условиях бонуса или больше);
  •  Внесите реквизиты удобного для Вас метода пополнения (карт Visa/Mastercard, ApplePay, MasterPass, Терминали iBox, Система.);
  •  Под кнопкой "Оплатить" выберите интересующий Вас бонус;
  •  Нажмите кнопку "Оплатить".

Средства и бонусы будут зачислены в течение 5-15 минут.`
                },
                {
                    question: 'Что такое отыгрыш бонуса? Как отыграть бонус?',
                    answer: `Отыгрыш бонуса – это сумма всех ставок, которые необходимо совершить игроку, чтобы иметь возможность вывести деньги со своего игрового счета.

К примеру, если сумма бонуса составляет 100 грн., а условие отыгрыша – х30, необходимо сделать ставок (неважно, выигрышных или проигрышных) на общую сумму 3 000 грн. Как только установленная сумма отыгрыша будет накоплена – бонус считается отыгранным, а выигрыш можно выводить.`
                },
                {
                    question: 'Что такое квест?',
                    answer: `Квест – это временная акция, в которой вы выполняете определенные задания. По достижению этапов в рамках квеста вы получите шанс на вознаграждение: бонусные вращения или другие, обусловленные квестом, призы. Участие в квесте позволяет разнообразить игровой процесс, получить новые эмоции и отправиться в увлекательное путешествие за призами!

Все доступные квесты представлены в разделе «Квесты», где указаны условия прохождения и игры, участие в которых необходимо для ежедневного прогресса.`
                },
                {
                    question: 'Где увидеть бонусный баланс и сумму отыгрыша?',
                    answer: `Ваш бонусный счет можно увидеть в верхнем правом углу сайта, рядом с иконкой профиля. Изначально в строчке «На счете» ваши реальные и бонусные средства показаны одной объединенной суммой. При развороте вкладки вы увидите сумму бонуса и сколько средств осталось отыграть.`
                },
            ]
        },
        {
            name: 'Верификация',
            icon: <FaUserCheck />,
            questions: [
                {
                    question: 'Зачем нужна верификация аккаунта?',
                    answer: `Верификация аккаунта (подтверждение личности) – процедура безопасности, призванная уберечь ваши деньги. Она обязательна для любого онлайн казино. Наша команда проверяет:

  •  Разрешено ли вам играть, согласно законодательству (есть ли вам 21 год)?
  •  Нет ли у вас других аккаунтов на нашем сайте?
  •  Принадлежат ли ваши платежные карты вам, а не другому человеку?`
                },
                {
                    question: 'Каковы сроки верификации?',
                    answer: `Верификация аккаунта происходит один раз и занимает до 24 часов.`
                },
                {
                    question: 'Как мне пройти верификацию?',
                    answer: `Для того чтобы успешно пройти верификацию аккаунта, вы должны подтвердить свою личность следующими документами:

1. Фото или скан полного разворота первой страницы вашего паспорта, второго разворота (серия и номер документа должны быть видны полностью);
  •  Если Вам исполнилось 45 лет - дополнительно фото третьего разворота паспорта;
  •  Если у вас ID-карта (паспорт нового образца): фото ID-карты с обеих сторон;
2. Селфи с выбранным вами документом в читабельном виде.
3. Фото или скан индивидуального идентификационного номера (ИИН) в читабельном виде.

Принимаются фото или цветные скан-копии в формате .jpg или .png в хорошем качестве (все данные читабельны).

Эти документы можно загрузить лично в вашем Профиле игрока, или отправить их нашей службе клиентской поддержки.`
                },
            ]
        },
        {
            name: 'Общие вопросы',
            icon: <BsFillQuestionCircleFill />,
            questions: [
                {
                    question: 'Как найти личный кабинет?',
                    answer: `Ваш личный кабинет можно найти, нажав на иконку «Меню»( нажав на три полоски в верхнем правом углу экрана) и выбрав пункт «Личный кабинет» или в нажав на иконку профиля рядом с вашим балансом.`
                },
                {
                    question: 'Как начать игру на сайте?',
                    answer: `Рваться в бой с самого начала всегда похвально, но не всегда мудро. Мы предлагаем Вам попробовать наши игры в демо режиме: изучить механику и найти то, что придется вам по душе. Демо-режим бесплатен – сразу же вносить средства на депозит необязательно.

Вы можете посмотреть список всех игр на главной странице сайта или найти любимые игры с помощью поисковой строки. Она находится в на главной странице, под иконкой «Поиск игр». Для того, чтобы найти игру, необходимо вписать первые три буквы ее названия на английском языке. вы также можете искать игры по провайдерам.

Как только вы поймете, что к чему – добро пожаловать в «${process.env.REACT_APP_NAME}»! Большие призы зовут, и мы искренне желаем вам удачи!`
                },
                {
                    question: 'Существует ли демо-счет?',
                    answer: `Для вашего удобства в каждой игре на сайте доступен режим «Демо». Он дает возможность испробовать большое количество игр, найти наиболее интересные и узнать тонкости игрового процесса без внесения депозита.`
                },
                {
                    question: 'Что делать, если в игре возникла ошибка или она не запускается?',
                    answer: `В случае возникновения сложностей в работе игры, в первую очередь стоит попробовать перезагрузить страницу сайта. Если это не помогло, пожалуйста, убедитесь в том, что у вас выключен VPN: не все игры отображаются за пределами Украины.

Если после выполнения этих рекомендаций в игре продолжают возникать неполадки, пожалуйста, обратитесь в онлайн-чат нашей службы поддержки. Также вы также можете обратиться на почту: support@${process.env.REACT_APP_DOMAIN} В обращении необходимо выслать:

  •  Скриншот ошибки в игре;
  •  Точное название игры;
  •  Название провайдера игры;
  •  Время и дату возникновения сложности;
  •  IP-адрес, с которого Вы открываете игру;
  •  Название и версию Вашего браузера;
  •  Тип Вашего устройства (Мобильный телефон/планшет/персональный компьютер).`
                },
                {
                    question: 'Что делать, если возникли сложности с игрой (зависания, медленно крутится)?',
                    answer: `Многие игры достаточно требовательны: для их стабильной работы необходимо иметь надежное интернет-соединение: кабель или Wi-Fi, либо 4G, если вы используете мобильный интернет.

Если вы уверены в надежности вашего соединения, но неполадки остаются, пожалуйста, попробуйте следующее шаги:

  •  Перезагрузите страницу с игрой или/и ваше устройство;
  •  Очистите кеш и куки-файлы браузера;
  •  Отключите расширения VPN, прокси или блокировщики рекламы, если они активны;
  •  Попробуйте проверить работу сайта в другом браузере;`
                },
                {
                    question: 'Как очистить кеш браузера? (для разных браузеров + моб/пк)',
                    answer: `Браузер Google Chrome:
Если Вы используете браузер Google Chrome с мобильного устройства:
  •  Зайдите в настройки браузера, нажав в правом верхнем углу на изображение трех полосок и выбрав раздел «Инструменты»;
  •  В открывшемся меню нажмите «Показать дополнительные настройки» – «Очистить историю»;
  •  Выберите из списка период «За все время». Установите флажок в пункте «Изображения и другие файлы, сохраненные в кеше» и убедитесь, что прочие флажки сняты;
  •  Для завершения процесса нажмите «Очистить историю»;
Если Вы используете браузер Google Chrome с персонального компьютера:
  •  Зайдите в настройки браузера, нажав в правом верхнем углу иконку с тремя точками и выбрав раздел «Инструменты»;
  •  В открывшемся меню нажать «Показать дополнительные настройки» и кнопку «Очистить историю»;
  •  В окне «Очистить историю» нужно выбрать из списка период «За все время».

Браузер Mozilla Firefox:
  •  В меню браузера нужно выбрать пункт «Настройки».
  •  Перейти во вкладку «Приватность», и в открывшемся окне нажать на ссылку «Удалить вашу недавнюю историю».
  •  В окне «Удаление истории» нужно установить флажок «Кеш» и убедиться, что все прочие флажки сняты.
  •  Для завершения процесса нажать «Удалить сейчас».

Яндекс браузер:
  •  Необходимо открыть меню и выбрать Настройки;
  •  В блоке «Конфиденциальность» нажать «Очистить данные». Отобразится список опций.
Если нужно очистить только кеш – оставьте отмеченным только это поле, снимите флажки с других опций.

Браузер Safari:
Для очистки кеша в данном браузере необходимо перейти в настройки самого устройства, затем выбрать Safari, нажать «Очистить историю и данные сайтов».

Браузер Opera Mobile:
Если Вы используете браузер Opera Mobile с мобильного устройства:
Необходимо перейти в экспресс-панель, выбрать внизу экрана значок «Настройки», а затем «Очистить историю посещений». Затем выбрать необходимые параметры для удаления, выбрать «ОК».
Если Вы используете браузер Opera Mobile с персонального компьютера:
  •  В боковом меню браузера выбрать пункт «Настройки» или нажать Alt+P;
  •  В левой части открывшегося меню нужно выбрать «Безопасность» и выбрать пункт «Очистить историю посещений»;
  •  В пункте «Уничтожить следующие элементы» выбрать «С самого начала»;
  •  Отметить флажок «Очистить кеш» и убедиться, что прочие флажки сняты.
  •  Чтобы закрыть окно «Настройки» и завершить процесс, нужно нажать «Очистить историю посещений».

Браузер Internet Explorer:
В меню браузера нужно выбрать пункт «Сервис» (для отображения этого меню — нажать кнопку Alt);
  •  В открывшемся разделе выбрать пункт «Удалить журнал обозревателя»;
  •  Откроется окно «Удаление истории обзора», в нем нужно установить флажок «Временные файлы интернета» и убедиться, что прочие флажки сняты.`
                },
            ]
        },
        {
            name: 'Sport квесты',
            icon: <MdSportsSoccer />,
            questions: [
                {
                    question: 'Что такое спортивный квест?',
                    answer: `Спортивный Квест - это новый способ выиграть награды в казино на сайте ${process.env.REACT_APP_NAME}. Ответьте на простые вопросы о Ваших любимых игроков, спортивные события и матчи и получите возможность выиграть до 25 000 бонусных средств в казино.`
                },
                {
                    question: 'Как играть в Cпортивный Квест? Я должен сделать ставку?',
                    answer: `Нет, для участия в спортивном квесте не нужно вносить ставку.

1. Достаточно создать аккаунт на веб-сайте https://соsmolot.ua и пополнить свой игровой счет.

2. Далее найдите тематический баннер на главной странице сайта и участвуйте в игре – ответьте на вопросы квеста.

3. Сумма начисляемых бонусов зависит от количества правильных ответов.`
                },
                {
                    question: 'Какие призы я могу выиграть?',
                    answer: `В Спортивном Квесте Вы можете выиграть уникальный приз, который не предлагает ни одно другое казино — до 25 000 бонусных средств с вейджером х1! (Бесплатные вращения с вейджером х30)

Также в квесте можно выиграть другие призы, такие как бесплатные вращения. Больше информации о призах ищите в игре.
 
Возможные призы для выйграша
   •    8 правильных ответов из 8 - 25 0000 бонусных средств
   •    7 правильных ответов из 8 - 5 000 бонусных средств
   •    6 правильных ответов из 8 - 250 бонусных средств
   •    5 правильных ответов из 8 - 10 бесплатных вращений`
                },
                {
                    question: 'Смогу ли я вывести свой приз?',
                    answer: `Да, если выполните условия вейджера. Как и любой другой бонус, каждый приз имеет требования по отыгрышу, а именно:
  •  Вейджер х1 на бонусные средства;
  •  Вейджер х30 на бонусные вращения.`
                },
                {
                    question: 'Как часто можно играть в Спортивный Квест?',
                    answer: `Новый квест появляется на сайте каждые 24 часа. Ответить на вопросы Вы  сможете только один раз в день.`
                },
                {
                    question: 'Где можно проверить, выиграл ли я?',
                    answer: `Результаты можно проверить в игре на следующий день после 14.00. Также Вы сможете посмотреть все результаты за предыдущие игры, в которых Вы участвовали.`
                },
                {
                    question: 'Когда выигрыш поступит на мой Счёт игрока?',
                    answer: `Ваш приз поступит на счёт игрока в течение 72 часов  после завершения игры.`
                },
            ]
        },
    ];

    const [questions, setQuestions] = useState(faqs[0].questions);

    return (
        <div>
            <Helmet>
                <title>FAQ | {process.env.REACT_APP_NAME}</title>
            </Helmet>

            <ContentBlock>
                <div className="faq-blocks">
                    {faqs.map(faq => (
                        <div className="faq-block" key={faq.name} onClick={() => setQuestions(faq.questions)}>
                            <div className="faq-block-icon">{faq.icon}</div>
                            <div className="faq-block-name">{faq.name}</div>
                        </div>
                    ))}
                </div>
                <h6 className="cabinet-title" style={{marginTop: 20}}>ВЕРОЯТНЫЙ ОТВЕТ НА ВАШ ВОПРОС</h6>
                <div className="faq-questions">
                    <Accordion questionsAnswers={questions}></Accordion>
                </div>
            </ContentBlock>
        </div>
    );
};

export default Faq;