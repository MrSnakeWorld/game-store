import {IGame} from './interfaces/IGame';

const GAMES: IGame[] = [
	{
		id: '_1',
		title: 'Forza Horizon 5',
		genres: ['Автосимулятор', 'Симулятор', 'Открытый мир'],
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
		isCame: true,
		isNovice: true,
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
		key: '6CV5T-MHVLN-MAUIA'
	},
	{
		id: '_7',
		title: 'Starfield',
		genres: ['Экшен', 'RPG'],
		description: 'Starfield — первая игровая вселенная, созданная за последние 25 лет Bethesda Game Studios, авторами The Elder Scrolls V: Skyrim и Fallout 4. В этой инновационной ролевой игре вам предстоит отправиться к звёздам, чтобы раскрыть величайшую тайну человечества.',
		fullDescription: [
			{
				body: 'Starfield — первая игровая вселенная, созданная за последние 25 лет Bethesda Game Studios, авторами The Elder Scrolls V: Skyrim и Fallout 4. В этой инновационной ролевой игре вы сможете создать своего персонажа и исследовать космос так, как вам этого хочется. Отправляйтесь в путь и раскройте величайшую тайну человечества.'
			}
		],
		price: undefined,
		image: 'https://cdn.akamai.steamstatic.com/steam/apps/1716740/header.jpg?t=1639080161',
		video: 'https://www.youtube.com/embed/_XNWeUlsVdY',
		isCame: false,
		isNovice: false,
		isLeader: false,
		date: '11 нояб 2022',
		languages: ['русский', 'английский', 'французский', 'итальянский', 'немецкий', 'испанский'],
		author: 'Bethesda Game Studios',
		publisher: 'Bethesda Softworks',
		key: '7TBH7-2PK23-2WK5B'
	},
	{
		id: '_8',
		title: 'Dwarf Fortress',
		genres: ['Песочница'],
		description: 'The deepest, most intricate simulation of a world that\'s ever been created. The legendary Dwarf Fortress is now on Steam. Build a fortress and try to help your dwarves survive, OR adventure as a single hero against a deeply generated world.',
		fullDescription: [
			{body: 'Prepare for the deepest, most intricate simulation of a world that has ever been created.'},
			{
				header: 'Features',
				body: `Not just generated geometry -- a whole simulated world. Generated rise and fall of civilizations, personalities, creatures, cultures, etc. Infinite hours of gameplay.
				Now with graphics! (Optional ASCII mode available.)
				Steam Workshop integration for easier modding
				A lifetime “living” project - created/updated since 2003, with no end in sight
				Generate your unique world and manage a bustling colony of dwarves, even as they probably mine towards their eventual demise.
				Optional ADVENTURER MODE: explore the generated world as a single hero in an RPG
				Optional LEGENDS MODE: read the history of the generated world and your games in it
				A new endless hobby, just for you!`
			},
			{
				header: 'About',
				body: `The legendary Dwarf Fortress is now on Steam! Build a fortress and try to help your dwarves survive, despite threats of starvation, dragons, and madness.
				In this complex construction/management/roguelike simulation, every generated world brings a unique challenge, whether it’s dwarves with their own simulated personalities or aquifers. Observe what makes your civilization fall into eventual decline, and learn for next time… until something else inevitably goes wrong.

				The combat model includes skills, body parts, material properties, aimed attacks, wrestling, pain, nausea, various poison effects, and much more.

				It’s difficult to convey the depth of the generation. Hundreds of animals and monsters, many of which are randomly created for each world, as well as generated poetry, musical forms, instruments, and dances for your dwarves to practice and perform. A dynamic weather model tracks wind, humidity, and air masses to create fronts, clouds, storms, and blizzards. Over two hundred rock and mineral types can appear, in their proper geological environments.

				Your purchase includes Dwarf Fortress Classic if you prefer to play without graphics or music or Steam-specific features, in the “classic” beta branch.

				Remember: Losing is fun!`
			},
			{
				header: 'What\'s new',
				body: `Nothing substantial is new or changed, under the hood. It’s still good old Dwarf Fortress, but with graphics support and music by default. A few bells and whistles won’t change that.

				You may already be familiar with the tile set mod packs from Michał “Mayday” Madej and Jacob "Ironhand" Bowman. Together, their efforts are creating an all-new tileset, as seen in what we've released so far. Meanwhile, Dabu and a couple of other musical artists yet to be announced are collaborating new musical tracks to match the seasons, and possibly a few other sound effects. (We're assured the original Dwarf Fortress song will make a reappearance as well in some form, don't worry.)`
			}
		],
		price: undefined,
		image: 'https://cdn.akamai.steamstatic.com/steam/apps/975370/header.jpg?t=1643663818',
		video: 'https://www.youtube.com/embed/pp7DEUzWOfo',
		isCame: false,
		isNovice: false,
		isLeader: false,
		date: 'Time is subjective',
		languages: ['английский'],
		author: 'Kitfox Games',
		publisher: 'Kitfox Games',
		key: '5N6FR-ISAKT-MGYTA'
	},
	{
		id: '_9',
		title: 'SnowRunner',
		genres: ['Симулятор', 'Автосимулятор', 'Песочница'],
		description: 'Встречайте новое поколение гонок по бездорожью! Вас ждут суровые просторы, мощные машины и десятки сложных заданий, которые можно выполнять в одиночку или в команде до 4 игроков!',
		fullDescription: [
			{
				body: 'Встречайте новое поколение гонок по бездорожью!'
			},
			{
				body: 'Сядьте за руль крутого внедорожника в SnowRunner и приготовьтесь покорять суровые просторы с реалистичной симуляцией ландшафта! В вашем распоряжении 40 моделей таких известных марок, как Ford, Chevrolet и Freightliner. Оставьте свой след в диком мире игры.'
			},
			{
				body: 'Выполняйте сложные задания в суровых условиях. Вас ждут грязь, потоки воды, снег и застывшие озёра. Расширяйте автопарк и настраивайте свои автомобили с помощью улучшений и различных приспособлений, таких как шноркели для водных потоков или цепи для движения по снегу.'
			},
			{
				body: `Играйте в одиночку или в команде до 4 игроков и расширяйте границы возможностей SnowRunner при помощи модификаций от нашего сообщества!
				  Экстремальные гонки с реалистичной физической моделью
				  40 уникальных машин, которые можно улучшать и настраивать по своему вкусу
				  Десятки сложных заданий в едином игровом мире
				  Играйте в одиночку или в команде до 4 игроков`
			}
		],
		price: 1199,
		image: 'https://cdn.akamai.steamstatic.com/steam/apps/1465360/header.jpg?t=1646144712',
		video: 'video',
		requirements: [
			{
				type: 'Минимальные',
				OS: 'Windows 7/8/10 (64-bit)',
				CPU: 'Intel i3-4130 3.4 GHz / AMD Ryzen 3 2200U 3.4 GHz',
				RAM: '8 GB ОЗУ',
				GPU: '2 GB, GeForce GTX 660 / Radeon R9 270',
				Size: 20
			},
			{
				type: 'Рекомендуемые',
				OS: 'Windows 7/8/10 (64-bit)',
				CPU: 'Intel i7-8700 3.2 GHz / AMD Ryzen 7 2700 3.2 GHz',
				RAM: '16 GB ОЗУ',
				GPU: '4 GB, GeForce GTX 970 / Radeon RX 580',
				Size: 20
			}
		],
		isCame: true,
		isNovice: false,
		isLeader: false,
		date: '18 мая. 2021',
		languages: ['русский', 'английский', 'французский', 'итальянский', 'немецкий', 'испанский'],
		author: 'Saber Interactive',
		publisher: 'Focus Home Interactive',
		key: 'PV0MK-VI7AG-YOPOW'
	},
	
	{
		id: '_10',
		title: 'RimWorld',
		genres: ['Песочница', 'Стратегия', 'Симулятор'],
		description: 'RimWorld управляет тремя людьми, выжившими после крушения космического лайнера, в строительстве колонии в приграничном мире на краю изученного пространства. Источники вдохновения этой игры -это дух космического вестерна Firefly, глубокая проработка Dwarf',
		fullDescription: [
			{
				body: 'Научно-фантастический симулятор колонии под управлением ИИ-рассказчика.'
			},
			{
				body: 'RimWorld управляет тремя людьми, выжившими после крушения космического лайнера, в строительстве колонии в приграничном мире на краю изученного пространства. Источники вдохновения этой игры -это дух космического вестерна Firefly, глубокая проработка Dwarf Fortress и эпические Dune и Warhammer 40 000.'
			},
			{
				body: 'Игра RimWorld разработана Tynan Sylvester и компанией Ludeon Studios. С момента первого выхода 4 ноября 2013 г. была улучшена.'
			},
			{
				header: 'ИИ-рассказчик',
				body: `RimWorld разработана не как состязательная стратегическая игра, а как генератор историй. Она не о победе и проигрыше, она о драме, трагедии и комедии, происходящей в вашей колонии. Игра создает такие события, как пиратские набеги, прибытие торговцев и бури. Но эти события не случайны. RimWorld использует ИИ-рассказчика (по образцу ИИ-директора из Left 4 Dead), который анализирует ситуацию и решает, какое событие по его мнению создаст лучшую историю.

				Можно выбирать между тремя рассказчиками: Продуманная Кассандра Классическая, более продуманная, ориентированная на строительство Фиби Тихоня и абсолютно непредсказуемый Ренди Случай.`
			},
			{
				header: 'Психология',
				body: `Люди в RimWorld постоянно изучают ситуацию и окружение, чтобы знать, как чувствовать себя в данный момент. Они реагируют на голод и усталость, на смерти у них на глазах, на неуважительно похороненные трупы, на ранения, на темноту, на нахождение в стесненных условиях, на сон под открытым небом или в одной комнате с посторонними и на многие другие ситуации. Можно в любое время проверять психологию героя, чтобы знать, что он чувствует и почему.

				Когда колонист слишком долго находится в состоянии стресса, у него может случиться "нервный срыв". Кто-то не выдерживает и некоторое время скитается по колонии. Кто-то уходит. Кто-то как в Dwarf'е становится психопатом и впадает в истерику насилия.`
			},
			{
				header: 'Вселенная',
				body: `Суть RimWorld - это смесь жесткой научной фантастики и Старого Запада. Это приграничный мир на краю изученного пространства вдали от цивилизованных основных миров. Планета огромна и в основном пустынна. Там нигде поблизости нет сильных цивилизаторских правительств. Вы предоставлены сами себе.

				Основная идея вселенной RimWorld - это разнообразие условий человеческого существования. В этих условиях человечество расселяется по всей галактике при отсутствии иных способов перемещения и общения быстрее чем свет. Учитывая тот факт, что звездные цивилизации приходят к упадку (из-за войн и эпидемий) так же часто, как и к процветанию, это означает, что межзвездный путешественник может сталкиваться с людьми любого уровня развития: от доземледельческих племен до сверхъестественных полубогов-полуроботов.
				
				В RimWorld начинающие колонисты находятся на уровне технического развития в середине этого диапазона. Но вы можете сталкиваться с людьми гораздо более низкого и более высокого уровня развития, а также приобретать и использовать их инструменты и оружие. В RimWorld в отдельно взятом бою могут участвовать луки и стрелы, ружья, автоматические винтовки и биомеханические машины убийств.`
			}
		],
		price: 619,
		image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/294100/header.jpg?t=1643670325',
		video: 'https://www.youtube.com/embed/3tDrxOASUog',
		requirements: [
			{
				type: 'Минимальные',
				OS: 'Windows 7',
				CPU: 'Core 2 Duo',
				RAM: '4 GB ОЗУ',
				GPU: 'Intel HD Graphics 4000 or other shader model 4.0',
				Size: 1
			}
		],
		isCame: true,
		isNovice: false,
		isLeader: false,
		date: '17 окт. 2018',
		languages: ['русский', 'английский', 'французский', 'итальянский', 'немецкий', 'испанский'],
		author: 'Ludeon Studios',
		publisher: 'Ludeon Studios',
		key: 'M4KK4-CGPMR-33PAX'
	},
	{
		id: '_11',
		title: 'METAL GEAR SOLID V: THE PHANTOM PAIN',
		genres: ['Стелс', 'Экшен', 'Глубокий сюжет'],
		description: 'Перейдите в новую эру франшизы с передовыми технологиями, работу которых обеспечивает графический процессор Fox Engine. Игроков ожидает масса положительных эмоций, поскольку теперь им будет предоставлена свобода выбора тактики в миссиях в открытом мире.',
		fullDescription: [
			{
				body: 'Компания Konami Digital Entertainment выпускает последнюю главу игры «METAL GEAR SOLID V» — «METAL GEAR SOLID V: The Phantom Pain». Перейдите в новую эру франшизы с передовыми технологиями, работу которых обеспечивает графический процессор Fox Engine. Игроков ожидает масса положительных эмоций, поскольку теперь им будет предоставлена свобода выбора тактики в миссиях в открытом мире.'
			},
			{
				body: 'Спустя девять лет после событий игры «MGSV: GROUND ZEROES» и падения Главной базы «Большой босс» Снейк выходит из комы. На дворе 1984 год. На фоне холодной войны продолжается глобальное обострение ядерного кризиса. Движимый местью, Снейк создает новую частную армию и возвращается на поле боя в поисках тайной группы XOF.'
			},
			{
				body: 'Команда разработчиков METAL GEAR SOLID продолжает амбициозно использовать такие серьезные темы, как психология военных конфликтов и сопутствующие им зверства и преступления. «MGSV: The Phantom Pain» — одна из наиболее ожидаемых игр года, которая будет характеризоваться игровым дизайном с открытым миром, фотореалистичной графикой и богатым функционалом. Эта игра войдет в историю как один из эталонов игровой промышленности за кинематографическую сюжетную линию, глубокие темы и увлекательнейший тактический геймплей.'
			},
			{
				header: 'Главные особенности:',
				body: `- Игровой дизайн с открытым миром, в котором игроки обладают полной свободой выбора тактики миссий и игрового прогресса в целом.
				- Графический процессор Fox Engine обеспечивает фотореалистичную графику, высочайшую детализацию игры и по-настоящему инновационное качество изображений.
				- Онлайн-функциональность переносит игровые впечатления за пределы консоли на другие устройства, значительно расширяя внутриигровые возможности и доступ к игре.`
			}
		],
		price: 999,
		image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/287700/header.jpg?t=1591740509',
		video: 'https://www.youtube.com/embed/NL4ZxDWLwpM',
		requirements: [
			{
				type: 'Минимальные',
				OS: 'Windows 7x64, Windows 8x64, Windows 10x64 (64-bit OS Required)',
				CPU: 'Intel Core i5-4460 (3.40 GHz) or better; Quad-core or better',
				RAM: '4 GB ОЗУ',
				GPU: 'NVIDIA GeForce GTX 650 (2GB) or better (DirectX 11 card Required)',
				Size: 28,
				DirectX: 9
			},
			{
				type: 'Рекомендуемые',
				OS: 'Windows 7x64, Windows 8x64, Windows 10x64 (64-bit OS Required)',
				CPU: 'Intel Core i7-4790 (3.60GHz) or better; Quad-core or better',
				RAM: '8 GB ОЗУ',
				GPU: 'NVIDIA GeForce GTX 760 (DirectX 11 graphic card required)',
				Size: 28,
				DirectX: 9
			}
		],
		isCame: true,
		isNovice: false,
		isLeader: false,
		date: '1 сен. 2015',
		languages: ['русский', 'английский', 'французский', 'итальянский', 'немецкий', 'испанский'],
		author: 'Konami Digital Entertainment',
		publisher: 'Konami Digital Entertainment',
		key: 'WPVLT-AH1X5-GU0IC'
	}
];


export default GAMES;