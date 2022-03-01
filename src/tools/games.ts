import {IGame} from './interfaces/IGame';

const GAMES: IGame[] = [
	{
		id: '_1',
		title: 'Forza Horizon 5',
		genres: ['Гонки', 'Симулятор', 'Открытый мир'],
		description: 'Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!',
		fullDescription: [
			{
				body: 'Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории.'
			},
			{
				header: 'Бесконечный калейдоскоп приключений Horizon',
				body: 'Вас ждут увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории.'
			},
			{
				header: 'Мир, полный красок',
				body: 'Перед вами откроется мир красоты и контрастов. Вы посетите пустыни, густые джунгли, исторические города, затерянные руины, чистейшие пляжи, глубокие ущелья и высокий, покрытый снегом вулкан.'
			},
			{
				header: 'Мир, полный приключений',
				body: 'Вас ожидает масштабная кампания с сотнями испытаний на любой вкус. Познакомьтесь с новыми персонажами и пройдите их сюжетные линии до конца.'
			},
			{
				header: 'Мир, полный перемен',
				body: 'Вы столкнётесь с удивительными природными явлениями Мексики: пыльными бурями и тропическими ливнями. Вместе со сменой времён года каждую неделю преображается и мир игры. Всякий раз вас будут ждать новые состязания, испытания, коллекционные предметы, награды и ещё не исследованные регионы. В мире Forza Horizon каждое время года хорошо по-своему!'
			},
			{
				header: 'Мир, полный друзей',
				body: 'Участвуйте в состязаниях Horizon Arcade вместе с другими игроками. Проходите невероятные, захватывающие дух испытания и получайте удовольствие от общения без меню, лобби и экранов загрузки. Ищите новых друзей в турне Horizon и заездах Horizon Open, дарите подарки участникам сообщества.'
			},
			{
				header: 'Мир, полный вдохновения',
				body: 'Творите и самовыражайтесь с помощью нового мощного редактора EventLab. Создавайте собственные гонки, испытания, трюки и даже полноценные игровые режимы. Вы сможете по-новому настроить внешний вид своей машины: поднять или опустить крышу кабриолета, покрасить тормозные колодки и придумать многое другое. А затем ничто не помешает вам поделиться своим творением с сообществом благодаря новой функции отправки подарков.'
			},
			{
				header: 'Начните свой путь в Horizon!'
			}
		],
		price: 2999,
		image: 'https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg?t=1645561560',
		video: 'https://www.youtube.com/embed/Rv7xLt5yNsM',
		requirements: [
			{
				type: 'Минимальные',
				OS: 'Windows 10 version 15063.0 or higher',
				CPU: 'Intel i5-4460 or AMD Ryzen 3 1200',
				RAM: '8 GB ОЗУ',
				GPU: 'NVidia GTX 970 OR AMD RX 470',
				DirectX: 12,
				Size: 110
			},
			{
				type: 'Рекомендуемые',
				OS: 'Windows 10 version 15063.0 or higher',
				CPU: 'Intel i5-8400 or AMD Ryzen 5 1500X',
				RAM: '16 GB ОЗУ',
				GPU: 'NVidia GTX 1070 OR AMD RX 590',
				DirectX: 12,
				Size: 110
			}
		],
		isCame: true,
		isNovice: false,
		isLeader: false,
		date: '9 ноя. 2021',
		languages: ['русский', 'английский', 'французский', 'итальянский', 'немецкий', 'испанский'],
		author: 'Playground Games',
		publisher: 'Xbox Game Studios',
		key: '6F9A1-A8Z91-FM31P'
	},
	{
		id: '_2',
		title: 'Elden Ring',
		genres: ['RPG', 'Экшен', 'Открытый мир'],
		description: 'НОВЫЙ ФЭНТЕЗИЙНЫЙ РОЛЕВОЙ БОЕВИК. Восстань, погасшая душа! Междуземье ждёт своего повелителя. Пусть благодать приведёт тебя к Кольцу Элден.',
		fullDescription: [
			{
				header: 'НОВЫЙ ФЭНТЕЗИЙНЫЙ РОЛЕВОЙ БОЕВИК.',
				body: 'Восстань, погасшая душа! Междуземье ждёт своего повелителя. Пусть благодать приведёт тебя к Кольцу Элден.',
			},
			{
				header: '• Огромный захватывающий мир',
				body: 'Огромный мир с открытыми полями, множеством ситуаций и гигантскими подземельями, где сложные трёхмерные конструкции сочетаются воедино. Путешествуйте, преодолевайте смертельные опасности и радуйтесь успехам.'
			},
			{
				header: '• Создайте своего персонажа',
				body: 'Вы можете не только изменить внешность персонажа, но также комбинировать оружие, броню и предметы. Развивайте персонажа по своему вкусу. Наращивайте мышцы или постигайте таинства магии.'
			},
			{
				header: '• Эпическая драма, выросшая из мифа',
				body: 'Многослойная история, разбитая на фрагменты. Эпическая драма, в которой мысли персонажей пересекаются в Междуземье.'
			},
			{
				header: '• Уникальный сетевой режим, приближающий вас к другим игрокам',
				body: 'Помимо многопользовательского режима, в котором вы напрямую подключаетесь к другим игрокам и путешествуете вместе, есть асинхронный сетевой режим, позволяющий ощутить присутствие других игроков.'
			}
		],
		price: 2499,
		image: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg?t=1645750738',
		video: 'https://www.youtube.com/embed/OT8if6DXOFQ',
		requirements: [
			{
				type: 'Минимальные',
				OS: 'Windows 10',
				CPU: 'INTEL CORE I5-8400 or AMD RYZEN 3 3300X',
				RAM: '12 GB ОЗУ',
				GPU: 'NVIDIA GEFORCE GTX 1060 3 GB or AMD RADEON RX 580 4 GB',
				DirectX: 12,
				Size: 60
			},
			{
				type: 'Рекомендуемые',
				OS: 'Windows 10/11',
				CPU: 'INTEL CORE I7-8700K or AMD RYZEN 5 3600X',
				RAM: '16 GB ОЗУ',
				GPU: 'NVIDIA GEFORCE GTX 1070 8 GB or AMD RADEON RX VEGA 56 8 GB',
				DirectX: 12,
				Size: 60
			}
		],
		isCame: true,
		isNovice: true,
		isLeader: true,
		date: '25 фев. 2022',
		languages: ['русский', 'английский', 'французский', 'итальянский', 'немецкий', 'испанский'],
		author: 'FromSoftware Inc.',
		publisher: 'BANDAI NAMCO Entertainment',
		key: 'XKPG2-3MJGP-8VI8G'
	},
	{
		id: '_3',
		title: 'Hitman 3',
		genres: ['Экшен', 'Песочница', 'Стелс'],
		description: 'Смерть ждет. Агент 47 возвращается в HITMAN 3 — эффектном завершении трилогии «Мир наемных убийц».',
		fullDescription: [
			{
				header: 'WORLD OF ASSASSINATION',
				body: 'HITMAN 3 is the best place to play every game in the World of Assassination trilogy. If you’ve already played HITMAN 2 on Steam, the locations that you can access in that game will be converted into an ‘Access Pass’ for HITMAN 3 when you buy the latest game. The Access Pass DLCs will be applied to your account and the locations will be available and ready to play from the first time you launch the game.'
			},
			{
				header: 'СТАНЬТЕ ПРОФЕССИОНАЛЬНЫМ УБИЙЦЕЙ',
				body: 'HITMAN 3 — эффектное завершение трилогии «Мир наемных убийц». Станьте легендарным убийцей Агентом 47, используйте фантазию и импровизируйте, совершая самые гениальные и зрелищные заказные убийства в огромных уровнях-«песочницах», разбросанных по всему миру.'
			},
			{
				header: 'УСТРАНЯЙТЕ ПАРТНЕРОВ «ПРОВИДЕНСА»',
				body: 'Агент 47 объединяется со своим старым другом Лукасом Греем, чтобы устранить партнеров «Провиденса», но охота на них оказывается сложнее, а планы приходится менять по ходу дела. Когда все будет позади, и сам 47-й, и мир вокруг изменятся раз и навсегда.'
			},
			{
				header: 'ПУТЕШЕСТВУЙТЕ ПО МИРУ',
				body: 'Вы побываете в самых разных экзотических уголках мира и насладитесь роскошными уровнями, открывающими безграничные возможности. Небоскреб в Дубае, красочные улицы Чунцина, виноградники Мендосы и другие уровни HITMAN 3 продуманы до мелочей и впечатляют высочайшим качеством графики. Прославленная технология Glacier от студии IOI Interactive погрузит вас в мир HITMAN 3, где события полностью зависят от действий игрока, а каждое прохождение поистине уникально.'
			},
		],
		price: 2698,
		discount: 40,
		image: 'https://cdn.akamai.steamstatic.com/steam/apps/1659040/header.jpg?t=1645711397',
		video: 'https://www.youtube.com/embed/Z29ORu6_p34',
		requirements: [
			{
				type: 'Минимальные',
				OS: 'OS 64-bit Windows 10',
				CPU: 'Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940',
				RAM: '8 GB ОЗУ',
				GPU: 'NVIDIA GeForce GTX 660 / Radeon HD 7870',
				DirectX: 12,
				Size: 60
			},
			{
				type: 'Рекомендуемые',
				OS: 'OS 64-bit Windows 10',
				CPU: 'Intel CPU Core i7 4790 4 GHz',
				RAM: '16 GB ОЗУ',
				GPU: 'Nvidia GPU GeForce GTX 1070 / AMD GPU Radeon RX Vega 56 8GB',
				DirectX: 12,
				Size: 60
			}
		],
		isCame: true,
		isNovice: false,
		isLeader: false,
		date: '20 янв. 2022',
		languages: ['русский', 'английский', 'французский', 'итальянский', 'немецкий', 'испанский'],
		author: 'IO Interactive A/S',
		publisher: 'IO Interactive A/S',
		key: 'EZ26E-7311H-6K5VY'
	},
	{
		id: '_4',
		title: 'Total War: WARHAMMER III',
		genres: ['Стратегия', 'Песочница', 'Экшен'],
		description: 'Драматический финал трилогии Total War: WARHAMMER уже здесь. Соберите войска и войдите в Царство Хаоса — обитель невообразимых ужасов, где будет решаться судьба всего мира. Обуздаете ли вы своих демонов… или же возглавите их?',
		fullDescription: [
			{
				header: 'МИР НА ГРАНИ ХАОСА',
				body: 'Предсмертный рев умирающего бога сокрушил границу между мирами, открыв портал в Царство Хаоса. Из этого водоворота вышли четыре Разрушительные силы — Хорн, Нургл, Тзинч и Слаанеш, сеющие вокруг себя тьму и отчаяние.				Стойкий Кислев и огромная империя под названием Великий Катай обороняются от них, а мстительный принц-демон клянется уничтожить тех, кто его осквернил… Грядущее столкновение затронет всех. Обуздаете ли вы своих демонов… или же возглавите их?'
			},
			{
				header: 'СОБЕРИТЕ МОГУЧЕЕ ВОЙСКО',
				body: 'Вам доступно семь уникальных рас и сотни отрядов. Соберите собственную армию и побеждайте в масштабных и зрелищных сражениях в реальном времени, разворачивающихся в огромном мире.'
			},
			{
				header: 'ПОСТРОЙТЕ ИМПЕРИЮ',
				body: 'В самой грандиозной и новаторской игре из серии Total War вас ждет захватывающая история, в ходе которой вам предстоит побывать в невообразимом Царстве Хаоса. Постройте свою империю в стратегии-песочнице, где каждая кампания уникальна.'
			},
			{
				header: 'ВЫБЕРИТЕ СВОЕГО ГЕРОЯ',
				body: 'Вам доступно целых 10 легендарных лордов! Что вы выберете? Объединитесь с богами Хаоса и станете одним из их воителей-демонов? Сыграете за древнего дракона-человека из Великого Катая? Отправитесь защищать ледяные земли Кислева с Ледяной королевой? Или примерите на себя роль абсолютного зла, став принцем-демоном?'
			},
			{
				header: 'СЕТЕВОЙ ХАОС',
				body: 'Сетевые игры стали еще масштабнее. Обширная сетевая кампания «Царство Хаоса» для 8 игроков, напряженный режим превосходства «один на один», сюжетные сетевые кампании, сосредоточенные на Кислеве и Великом Катае, рейтинговые и пользовательские битвы… Недостатка в способах сеять хаос вместе с друзьями у вас точно не будет.'
			},
		],
		price: 3439,
		image: 'https://cdn.akamai.steamstatic.com/steam/apps/1142710/header.jpg?t=1645718522',
		video: 'https://www.youtube.com/embed/HAr7yUlM0Po',
		requirements: [
			{
				type: 'Минимальные',
				OS: 'Windows 7 64-bit',
				CPU: 'Intel i3/Ryzen 3 series',
				RAM: '6 GB ОЗУ',
				GPU: 'Nvidia GTX 900/AMD RX 400 series | Intel Iris Xe Graphics',
				DirectX: 11,
				Size: 120
			},
			{
				type: 'Рекомендуемые',
				OS: 'Windows 10 64-bit',
				CPU: 'Intel i5/Ryzen 5 series',
				RAM: '8 GB ОЗУ',
				GPU: 'Nvidia GeForce GTX 1660 Ti/AMD RX 5600-XT',
				DirectX: 11,
				Size: 120
			}
		],
		isCame: true,
		isNovice: true,
		isLeader: true,
		date: '17 фев. 2022',
		languages: ['русский', 'английский', 'французский', 'итальянский', 'немецкий', 'испанский'],
		author: 'SEGA',
		publisher: 'CREATIVE ASSEMBLY',
		key: 'CBTGP-UQFUG-HK1LY'
	},
	{
		id: '_5',
		title: 'ELEX II',
		genres: ['RPG', 'Экшен', 'Открытый мир'],
		description: 'В продолжении ELEX, винтажной RPG с открытым миром, Джаксу снова предстоит объединить свободных людей Магалана против новой угрозы – скиандов, угрожающих навсегда изменить лик планеты.',
		fullDescription: [
			{
				body: 'ELEX II – продолжение ELEX, винтажной ролевой игры с открытым миром от знаменитой студии Piranha Bytes, разработчиков Gothic и Risen. В ELEX II вам предстоит вернуться в постапокалиптический мир Магалана – благодаря реактивному ранцу вам откроется небывалая свобода в исследовании его многоликих просторов.'
			},
			{
				body: `
					Не прошло и нескольких лет с победы Джакса над Гибридом, как на планету с небес обрушилась новая опасность, привнеся с собой опаснейшие силы темного элекса и угрозу всему живому. Чтобы защитить Магалан, Джакс вынужден заняться объединением всех группировок на планете против общего врага, в то же время пытаясь участвовать в воспитании своего юного сына Декса.
					Перед вами откроется огромный, разнообразный, совершенно уникальный мир со множеством биомов и фракций в постапокалиптическом НФ-сеттинге.
				`
			},
			{
				header: 'Что вас ждет в игре:',
				body: `
					Исследуйте планету Магалан с невиданной свободой: реактивный ранец позволит вам не только быстро перемещаться по карте, но и по-настоящему летать!
					Взаимодействуйте со множеством уникальных NPC, которые:
					помнят ваши действия и соответственно реагируют на них
					будут присоединяться к вам и уходить из отряда в зависимости от ваших поступков
					смертны, причем их гибель заметно отразится на сюжете
					Сражайтесь в ближнем и дальнем бою благодаря значительно усовершенстсвованной системе управления
					Напишите свою историю, в которой у всех ваших действий есть последствия, а этические решения многообразны, как и весь мир игры
				`
			}
		],
		price: 1999,
		discount: 10,
		image: 'https://cdn.akamai.steamstatic.com/steam/apps/900040/header.jpg?t=1645602582',
		video: 'https://www.youtube.com/embed/Dg09LJky-bw',
		requirements: [
			{
				type: 'Минимальные',
				OS: 'Windows 10, 64 Bit',
				CPU: 'AMD Ryzen 3 3100 / Intel Core i5-7400',
				RAM: '12 GB ОЗУ',
				GPU: 'Radeon RX 5600 XT / Geforce GTX 1060',
				DirectX: 11,
				Size: 45
			},
			{
				type: 'Рекомендуемые',
				OS: 'Windows 10, 64 Bit',
				CPU: 'AMD Ryzen 7 2700 / Intel Core i5-9500F',
				RAM: '16 GB ОЗУ',
				GPU: 'Radeon RX 5700 XT / Geforce RTX 2060',
				DirectX: 11,
				Size: 45
			}
		],
		isCame: false,
		isNovice: false,
		isLeader: true,
		date: '1 мар. 2022',
		languages: ['русский', 'английский', 'французский', 'итальянский', 'немецкий', 'испанский'],
		author: 'Piranha Bytes',
		publisher: 'THQ Nordic',
		key: 'TWX4S-OTKFT-ZFBBL'
	},
	{
		id: '_6',
		title: 'Red Dead Redemption 2',
		genres: ['Экшен', 'Глубокий сюжет', 'Открытый мир'],
		description: 'Игра RDR2, получившая более 175 наград и 250 высших оценок от игровых изданий, – это грандиозная история о судьбе бандита Артура Моргана и банды Ван дер Линде, бегущих от закона через всю Америку на заре современной эпохи. Включает бесплатный доступ к совместной игре в мире Red Dead Online.',
		fullDescription: [
			{
				body: 'Америка, 1899 год.'
			},
			{
				body: 'Артур Морган и другие подручные Датча ван дер Линде вынуждены пуститься в бега. Их банде предстоит участвовать в кражах, грабежах и перестрелках в самом сердце Америки. За ними по пятам идут федеральные агенты и лучшие в стране охотники за головами, а саму банду разрывают внутренние противоречия. Артуру предстоит выбрать, что для него важнее: его собственные идеалы или же верность людям, которые его взрастили.'
			},
			{
				body: 'В комплекте новый контент для сюжетного режима, полноценный фоторежим и доступ к совместной игре в мире Red Dead Online, позволяющие игрокам найти свое место на Диком Западе. Вы можете выслеживать опасных преступников в роли охотника за головами, развивать собственное дело в роли торговца, разыскивать уникальные сокровища в роли коллекционера и открыть подпольное производство алкоголя в роли самогонщика, а также многое другое.'
			},
			{
				body: 'Red Dead Redemption 2 для PC задействует всю мощь современных компьютеров, чтобы максимально правдоподобно представить каждый уголок этого огромного, насыщенного деталями мира. В числе графических и технических усовершенствований – увеличенная дальность прорисовки; улучшения в системе глобального освещения и рассеянного затенения, обеспечивающие более реалистичную смену времени суток; улучшенные отражения и тени более высокого разрешения на всех расстояниях; тесселяция текстур древесной коры и более качественные текстуры травы и меха, за счет чего животные и растения смотрятся еще натуралистичнее.'
			},
			{
				body: 'Кроме того, Red Dead Redemption 2 для PC поддерживает режим HDR, разрешение 4K и выше, конфигурации с несколькими мониторами, широкоэкранные мониторы, более высокую частоту кадров и не только.'
			}
		],
		price: 2499,
		image: 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1618851907',
		video: 'https://www.youtube.com/embed/eaW0tYpxyp0',
		requirements: [
			{
				type: 'Минимальные',
				OS: 'Windows 7 - Service Pack 1 (6.1.7601)',
				CPU: 'Intel® Core™ i5-2500K / AMD FX-6300',
				RAM: '8 GB ОЗУ',
				GPU: 'Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB',
				Size: 150
			},
			{
				type: 'Рекомендуемые',
				OS: 'Windows 10 - April 2018 Update (v1803)',
				CPU: 'Intel® Core™ i7-4770K / AMD Ryzen 5 1500X',
				RAM: '12 GB ОЗУ',
				GPU: 'Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB',
				Size: 150
			}
		],
		isCame: true,
		isNovice: false,
		isLeader: true,
		date: '5 дек. 2019',
		languages: ['русский', 'английский', 'французский', 'итальянский', 'немецкий', 'испанский'],
		author: 'Rockstar Games',
		publisher: 'Rockstar Games',
		key: '6FZ91-PA8A1-1M3PO'
	}
];


export default GAMES;