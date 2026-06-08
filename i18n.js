/* =========================================================================
   i18n.js — traduction du site + sélecteur à drapeaux (FR EN ES ZH JA IT)
   Choix mémorisé (localStorage), conservé entre les pages.
   Les noms de projets/logiciels/lieux ne sont pas dans le dictionnaire => non traduits.
   ========================================================================= */
(function(){
  "use strict";

  var FR='<svg viewBox="0 0 3 2" preserveAspectRatio="none"><rect width="3" height="2" fill="#fff"/><rect width="1" height="2" fill="#0055A4"/><rect x="2" width="1" height="2" fill="#EF4135"/></svg>';
  var GB='<svg viewBox="0 0 60 30" preserveAspectRatio="none"><rect width="60" height="30" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="3"/><rect x="25" width="10" height="30" fill="#fff"/><rect y="10" width="60" height="10" fill="#fff"/><rect x="27" width="6" height="30" fill="#C8102E"/><rect y="12" width="60" height="6" fill="#C8102E"/></svg>';
  var ES='<svg viewBox="0 0 3 2" preserveAspectRatio="none"><rect width="3" height="2" fill="#AA151B"/><rect y="0.5" width="3" height="1" fill="#F1BF00"/></svg>';
  var CN='<svg viewBox="0 0 30 20" preserveAspectRatio="none"><rect width="30" height="20" fill="#DE2910"/><polygon fill="#FFDE00" points="7,2.5 8.06,5.54 11.28,5.61 8.71,7.56 9.65,10.64 7,8.8 4.35,10.64 5.29,7.56 2.72,5.61 5.94,5.54"/><circle cx="12.5" cy="2.5" r="0.9" fill="#FFDE00"/><circle cx="14.5" cy="4.5" r="0.9" fill="#FFDE00"/><circle cx="14.5" cy="7.5" r="0.9" fill="#FFDE00"/><circle cx="12.5" cy="9.5" r="0.9" fill="#FFDE00"/></svg>';
  var JP='<svg viewBox="0 0 30 20" preserveAspectRatio="none"><rect width="30" height="20" fill="#fff"/><circle cx="15" cy="10" r="6" fill="#BC002D"/></svg>';
  var IT='<svg viewBox="0 0 3 2" preserveAspectRatio="none"><rect width="3" height="2" fill="#fff"/><rect width="1" height="2" fill="#009246"/><rect x="2" width="1" height="2" fill="#CE2B37"/></svg>';

  var LANGS=[
    {code:'fr',label:'Français',flag:FR},
    {code:'en',label:'English', flag:GB},
    {code:'es',label:'Español', flag:ES},
    {code:'zh',label:'中文',     flag:CN},
    {code:'ja',label:'日本語',   flag:JP},
    {code:'it',label:'Italiano',flag:IT}
  ];

  var A_RT="\u2197\uFE0E", A_DR="\u2198\uFE0E", A_R="\u2192\uFE0E";

  var T = {
    "Accueil":{en:"Home",es:"Inicio",zh:"首页",ja:"ホーム",it:"Home"},
    "Moi":{en:"About me",es:"Sobre mí",zh:"关于我",ja:"自己紹介",it:"Chi sono"},
    "Projets":{en:"Projects",es:"Proyectos",zh:"项目",ja:"プロジェクト",it:"Progetti"},
    "Freelance":{en:"Freelance",es:"Freelance",zh:"自由职业",ja:"フリーランス",it:"Freelance"},
    "Contact":{en:"Contact",es:"Contacto",zh:"联系",ja:"お問い合わせ",it:"Contatti"},
    "Me contacter":{en:"Contact me",es:"Contáctame",zh:"联系我",ja:"連絡する",it:"Contattami"},
    "Mentions légales":{en:"Legal notice",es:"Aviso legal",zh:"法律声明",ja:"法的事項",it:"Note legali"},
    "CGV":{en:"Terms of Sale",es:"Condiciones de venta",zh:"销售条款",ja:"販売条件",it:"Condizioni di vendita"},
    "CGU":{en:"Terms of Use",es:"Condiciones de uso",zh:"使用条款",ja:"利用規約",it:"Condizioni d'uso"},
    "Politique de confidentialité":{en:"Privacy Policy",es:"Política de privacidad",zh:"隐私政策",ja:"プライバシーポリシー",it:"Informativa sulla privacy"},
    "Loïc Karrer — Tous droits réservés.":{en:"Loïc Karrer — All rights reserved.",es:"Loïc Karrer — Todos los derechos reservados.",zh:"Loïc Karrer — 版权所有。",ja:"Loïc Karrer — 無断転載禁止。",it:"Loïc Karrer — Tutti i diritti riservati."},
    "Menu":{en:"Menu",es:"Menú",zh:"菜单",ja:"メニュー",it:"Menu"},
    "Fermer":{en:"Close",es:"Cerrar",zh:"关闭",ja:"閉じる",it:"Chiudi"},
    "Entrer sur le site":{en:"Enter the site",es:"Entrar al sitio",zh:"进入网站",ja:"サイトに入る",it:"Entra nel sito"},
    "Projets — Loïc Karrer":{en:"Projects — Loïc Karrer",es:"Proyectos — Loïc Karrer",zh:"项目 — Loïc Karrer",ja:"プロジェクト — Loïc Karrer",it:"Progetti — Loïc Karrer"},

    "La rigueur de la gestion,":{en:"The rigor of management,",es:"El rigor de la gestión,",zh:"管理的严谨，",ja:"マネジメントの厳密さ、",it:"Il rigore della gestione,"},
    "au service de":{en:"at the service of",es:"al servicio de",zh:"服务于",ja:"それを活かして",it:"al servizio dei"},
    "vos projets.":{en:"your projects.",es:"tus proyectos.",zh:"您的项目。",ja:"あなたのプロジェクトへ。",it:"i vostri progetti."},
    "Étudiant en BUT GEA — Gestion des Entreprises et des Administrations":{en:"BUT GEA student — Business and Administration Management",es:"Estudiante de BUT GEA — Gestión de Empresas y Administraciones",zh:"BUT GEA 在读学生 — 企业与行政管理",ja:"BUT GEA 専攻の学生 — 企業・行政管理",it:"Studente BUT GEA — Gestione delle Imprese e delle Amministrazioni"},
    "Actuellement en recherche d'alternance / stage":{en:"Currently seeking a work-study placement or internship",es:"Actualmente en busca de alternancia o prácticas",zh:"目前正在寻找学徒制/实习机会",ja:"現在、アルテルナンス／インターンを募集中",it:"Attualmente in cerca di alternanza / stage"},
    "Voir mes projets":{en:"See my projects",es:"Ver mis proyectos",zh:"查看我的项目",ja:"プロジェクトを見る",it:"Vedi i miei progetti"},
    "Votre photo ici":{en:"Your photo here",es:"Tu foto aquí",zh:"您的照片",ja:"あなたの写真",it:"La tua foto qui"},

    "Mes outils":{en:"My tools",es:"Mis herramientas",zh:"我的工具",ja:"ツール",it:"I miei strumenti"},
    "Les logiciels que je maîtrise.":{en:"The software I master.",es:"El software que domino.",zh:"我精通的软件。",ja:"使いこなすソフトウェア。",it:"I software che padroneggio."},
    "De la création graphique à l'intégration web, j'utilise chaque logiciel là où il est le plus pertinent — du visuel sur Affinity Designer et la suite Adobe jusqu'à la mise en ligne sur VS Code.":{en:"From graphic design to web development, I use each piece of software where it fits best — from visuals in Affinity Designer and the Adobe suite to going live with VS Code.",es:"Del diseño gráfico a la integración web, uso cada programa donde resulta más pertinente: del aspecto visual en Affinity Designer y la suite de Adobe hasta la publicación con VS Code.",zh:"从平面设计到网页开发，我让每款软件各尽其用——视觉创作用 Affinity Designer 和 Adobe，上线则用 VS Code。",ja:"グラフィックデザインからWeb実装まで、それぞれのソフトを最適な場面で使い分けます。ビジュアルは Affinity Designer や Adobe、公開は VS Code で。",it:"Dal design grafico all'integrazione web, uso ogni software dove rende meglio: dal visivo con Affinity Designer e la suite Adobe fino alla pubblicazione con VS Code."},

    "À propos":{en:"About",es:"Acerca de",zh:"关于",ja:"自己紹介",it:"Chi sono"},
    "Apprendre vite, créer, et un jour":{en:"Learn fast, create, and one day",es:"Aprender rápido, crear y un día",zh:"快速学习、创造，终有一天",ja:"速く学び、創り、いつか",it:"Imparare in fretta, creare e un giorno"},
    "entreprendre par moi-même.":{en:"start my own business.",es:"emprender por mí mismo.",zh:"自己创业。",ja:"自分で起業する。",it:"mettermi in proprio."},
    "Discutons ensemble":{en:"Let's talk",es:"Hablemos",zh:"一起聊聊",ja:"話しましょう",it:"Parliamone"},

    "Langues":{en:"Languages",es:"Idiomas",zh:"语言",ja:"言語",it:"Lingue"},
    "Les langues que je parle.":{en:"The languages I speak.",es:"Los idiomas que hablo.",zh:"我会说的语言。",ja:"話せる言語。",it:"Le lingue che parlo."},
    "À l'écrit comme à l'oral.":{en:"Written and spoken.",es:"Escrito y hablado.",zh:"书面与口语皆可。",ja:"読み書きも会話も。",it:"Scritto e parlato."},
    "Français":{en:"French",es:"Francés",zh:"法语",ja:"フランス語",it:"Francese"},
    "Anglais":{en:"English",es:"Inglés",zh:"英语",ja:"英語",it:"Inglese"},
    "Langue maternelle":{en:"Native language",es:"Lengua materna",zh:"母语",ja:"母語",it:"Lingua madre"},
    "Couramment":{en:"Fluent",es:"Con fluidez",zh:"流利",ja:"流暢に",it:"Fluente"},

    "Sélection":{en:"Selection",es:"Selección",zh:"精选",ja:"セレクション",it:"Selezione"},
    "Mes projets.":{en:"My projects.",es:"Mis proyectos.",zh:"我的项目。",ja:"プロジェクト。",it:"I miei progetti."},
    "Des projets à découvrir un par un sur leur page dédiée.":{en:"Projects to discover one by one on their own page.",es:"Proyectos para descubrir uno a uno en su página dedicada.",zh:"逐个在各自页面上探索的项目。",ja:"それぞれの専用ページで一つずつ見られるプロジェクト。",it:"Progetti da scoprire uno per uno nella loro pagina dedicata."},
    "UX/UI · Refonte · Web":{en:"UX/UI · Redesign · Web",es:"UX/UI · Rediseño · Web",zh:"UX/UI · 改版 · 网页",ja:"UX/UI · リデザイン · Web",it:"UX/UI · Restyling · Web"},
    "Identité · Direction artistique · Web":{en:"Identity · Art direction · Web",es:"Identidad · Dirección artística · Web",zh:"品牌识别 · 艺术指导 · 网页",ja:"アイデンティティ · アートディレクション · Web",it:"Identità · Direzione artistica · Web"},
    "Communication · Direction artistique · Web":{en:"Communication · Art direction · Web",es:"Comunicación · Dirección artística · Web",zh:"传播 · 艺术指导 · 网页",ja:"コミュニケーション · アートディレクション · Web",it:"Comunicazione · Direzione artistica · Web"},
    "Logo · Identité · Direction artistique":{en:"Logo · Identity · Art direction",es:"Logo · Identidad · Dirección artística",zh:"标志 · 品牌识别 · 艺术指导",ja:"ロゴ · アイデンティティ · アートディレクション",it:"Logo · Identità · Direzione artistica"},
    "Découvrir":{en:"Discover",es:"Descubrir",zh:"查看",ja:"詳しく見る",it:"Scopri"},
    "Parcourir tous les projets":{en:"Browse all projects",es:"Ver todos los proyectos",zh:"浏览所有项目",ja:"すべてのプロジェクトを見る",it:"Sfoglia tutti i progetti"},
    "Étudiant franco-américain de 23 ans, je suis en troisième année de BUT GEA à l'IUT Nice Côte d'Azur. Je me forme à la gestion avec un objectif clair en tête : créer un jour ma propre entreprise. J'ai surtout appris en autodidacte, tout en construisant de vraies expériences, aussi bien universitaires que professionnelles.":{en:"A 23-year-old French-American student, I'm in my third year of the BUT GEA program at IUT Nice Côte d'Azur. I'm training in management with one clear goal in mind: to start my own business one day. I've mostly taught myself, while building real experience, both academic and professional.",es:"Estudiante franco-estadounidense de 23 años, curso el tercer año de BUT GEA en el IUT Nice Côte d'Azur. Me formo en gestión con un objetivo claro: crear algún día mi propia empresa. Aprendí sobre todo de forma autodidacta, construyendo a la vez experiencias reales, tanto universitarias como profesionales.",zh:"我是一名23岁的法美双籍学生，目前在尼斯蔚蓝海岸大学技术学院（IUT Nice Côte d'Azur）攻读 BUT GEA 第三年。我学习管理，目标明确：有朝一日创办自己的企业。我主要靠自学，同时积累了真实的学习与职业经验。",ja:"23歳のフランス系アメリカ人の学生で、IUT Nice Côte d'Azur の BUT GEA 3年生です。「いつか自分の会社を立ち上げる」という明確な目標を持って経営を学んでいます。主に独学で学びながら、大学でも仕事でも実践的な経験を積んできました。",it:"Studente franco-americano di 23 anni, sono al terzo anno di BUT GEA all'IUT Nice Côte d'Azur. Mi formo nella gestione con un obiettivo chiaro: creare un giorno la mia impresa. Ho imparato soprattutto da autodidatta, costruendo allo stesso tempo esperienze reali, sia universitarie che professionali."},
    "Rigoureux, ponctuel et sérieux, je suis à l'aise en équipe et je m'adapte très vite à un nouvel environnement. J'apprends en continu, et je suis aujourd'hui à la recherche d'expériences pour mettre tout cela en pratique.":{en:"Rigorous, punctual and serious, I'm comfortable in a team and adapt very quickly to a new environment. I learn continuously, and I'm now looking for opportunities to put it all into practice.",es:"Riguroso, puntual y serio, me siento cómodo en equipo y me adapto muy rápido a un nuevo entorno. Aprendo de forma continua y ahora busco experiencias para poner todo esto en práctica.",zh:"我严谨、守时、认真，善于团队合作，能很快适应新环境。我持续学习，目前正在寻找把这一切付诸实践的机会。",ja:"几帳面で時間を守り、真面目な性格です。チームでの仕事が得意で、新しい環境にもすぐ順応します。学び続けており、今はそれらを実践する機会を探しています。",it:"Rigoroso, puntuale e serio, mi trovo bene in squadra e mi adatto molto in fretta a un nuovo ambiente. Imparo di continuo e oggi cerco esperienze per mettere tutto questo in pratica."},

    "Disponible pour vos projets.":{en:"Available for your projects.",es:"Disponible para tus proyectos.",zh:"随时为您的项目服务。",ja:"あなたのプロジェクトに対応します。",it:"Disponibile per i vostri progetti."},
    "En parallèle de mes études, je réalise des missions de création visuelle et web.":{en:"Alongside my studies, I take on visual and web design projects.",es:"Junto a mis estudios, realizo encargos de creación visual y web.",zh:"在学习之余，我承接视觉与网页设计的工作。",ja:"学業と並行して、ビジュアル・Web制作の案件を手がけています。",it:"Insieme agli studi, realizzo lavori di creazione visiva e web."},
    "Toutes les prestations sont sur devis":{en:"All services are quote-based",es:"Todos los servicios son con presupuesto",zh:"所有服务均按报价提供",ja:"すべて見積もり制です",it:"Tutti i servizi sono su preventivo"},
    "Logo — création & refonte":{en:"Logo — creation & redesign",es:"Logo — creación y rediseño",zh:"标志 — 创作与改版",ja:"ロゴ — 制作＆リデザイン",it:"Logo — creazione e restyling"},
    "Conception d'un logo de zéro, ou modernisation d'un logo existant.":{en:"Designing a logo from scratch, or modernizing an existing one.",es:"Diseño de un logo desde cero o modernización de uno existente.",zh:"从零设计标志，或对现有标志进行现代化改造。",ja:"ゼロからのロゴ制作、または既存ロゴの刷新。",it:"Creazione di un logo da zero o ammodernamento di uno esistente."},
    "Charte graphique & direction artistique":{en:"Brand guidelines & art direction",es:"Manual de marca y dirección artística",zh:"视觉规范与艺术指导",ja:"ブランドガイドライン＆アートディレクション",it:"Linee guida grafiche e direzione artistica"},
    "Un univers visuel cohérent : couleurs, typographies, déclinaisons et règles d'usage.":{en:"A coherent visual world: colors, typography, variations and usage rules.",es:"Un universo visual coherente: colores, tipografías, variaciones y normas de uso.",zh:"统一的视觉体系：色彩、字体、衍生应用与使用规范。",ja:"一貫したビジュアル：色、書体、展開、使用ルール。",it:"Un universo visivo coerente: colori, tipografia, declinazioni e regole d'uso."},
    "Création de site internet":{en:"Website creation",es:"Creación de sitio web",zh:"网站搭建",ja:"ウェブサイト制作",it:"Creazione di siti web"},
    "Conception et intégration d'un site vitrine moderne (hébergement non inclus).":{en:"Design and development of a modern showcase website (hosting not included).",es:"Diseño e integración de un sitio escaparate moderno (alojamiento no incluido).",zh:"设计并搭建现代展示型网站（不含托管）。",ja:"モダンな紹介サイトの設計・実装（ホスティングは含みません）。",it:"Progettazione e sviluppo di un sito vetrina moderno (hosting non incluso)."},
    "Et plus encore":{en:"And more",es:"Y mucho más",zh:"以及更多",ja:"その他いろいろ",it:"E molto altro"},
    "Supports de communication, visuels pour les réseaux, mise en page… Parlons-en.":{en:"Communication materials, social media visuals, layouts… Let's talk.",es:"Materiales de comunicación, visuales para redes, maquetación… Hablemos.",zh:"传播物料、社交媒体视觉、排版……来聊聊吧。",ja:"販促物、SNS用ビジュアル、レイアウトなど…ご相談ください。",it:"Materiali di comunicazione, visual per i social, impaginazione… Parliamone."},
    "Demander un devis":{en:"Request a quote",es:"Pedir presupuesto",zh:"索取报价",ja:"見積もりを依頼",it:"Richiedi un preventivo"},

    "Travaillons":{en:"Let's work",es:"Trabajemos",zh:"一起",ja:"一緒に",it:"Lavoriamo"},
    "ensemble.":{en:"together.",es:"juntos.",zh:"合作。",ja:"働きましょう。",it:"insieme."},
    "Une alternance, un stage, un projet ou simplement échanger\u00a0? Je réponds rapidement.":{en:"A work-study placement, an internship, a project, or just a chat? I reply quickly.",es:"¿Una alternancia, unas prácticas, un proyecto o simplemente charlar? Respondo rápido.",zh:"实习、学徒、项目，或只是聊聊？我会很快回复。",ja:"アルテルナンス、インターン、プロジェクト、あるいは雑談でも？すぐにお返事します。",it:"Un'alternanza, uno stage, un progetto o semplicemente due chiacchiere? Rispondo in fretta."},
    "Envoyer un message":{en:"Send a message",es:"Enviar un mensaje",zh:"发送消息",ja:"メッセージを送る",it:"Invia un messaggio"},

    "Newsletter":{en:"Newsletter",es:"Newsletter",zh:"邮件订阅",ja:"ニュースレター",it:"Newsletter"},
    "Restez informé.":{en:"Stay in the loop.",es:"Mantente al día.",zh:"保持关注。",ja:"最新情報をお届け。",it:"Resta aggiornato."},
    "Mes nouveaux projets, mes disponibilités et quelques coulisses, directement dans votre boîte mail.":{en:"My latest projects, my availability and a few behind-the-scenes, straight to your inbox.",es:"Mis nuevos proyectos, mi disponibilidad y algunos entresijos, directamente en tu correo.",zh:"我的新项目、空档安排和一些幕后，直接发送到您的邮箱。",ja:"新しいプロジェクト、空き状況、舞台裏を、あなたのメールへ直接お届けします。",it:"I miei nuovi progetti, le mie disponibilità e qualche retroscena, direttamente nella tua casella."},
    "Votre adresse e-mail":{en:"Your email address",es:"Tu correo electrónico",zh:"您的邮箱地址",ja:"メールアドレス",it:"Il tuo indirizzo email"},
    "S'inscrire":{en:"Subscribe",es:"Suscribirse",zh:"订阅",ja:"登録する",it:"Iscriviti"},
    "Désinscription en un clic, à tout moment.":{en:"Unsubscribe in one click, anytime.",es:"Cancela la suscripción en un clic, cuando quieras.",zh:"随时一键退订。",ja:"いつでもワンクリックで解除できます。",it:"Disiscrizione in un clic, quando vuoi."},
    "Inscription confirmée\u00a0!":{en:"You're subscribed!",es:"¡Suscripción confirmada!",zh:"订阅成功！",ja:"登録が完了しました！",it:"Iscrizione confermata!"},
    "Merci\u00a0! Vous recevrez bientôt de mes nouvelles.":{en:"Thank you! You'll hear from me soon.",es:"¡Gracias! Pronto tendrás noticias mías.",zh:"谢谢！您很快就会收到我的消息。",ja:"ありがとうございます！近いうちにお知らせします。",it:"Grazie! Presto avrai mie notizie."},

    "Décrivez votre projet en quelques champs, je reviens vers vous rapidement.":{en:"Describe your project in a few fields, I'll get back to you quickly.",es:"Describe tu proyecto en unos campos y te respondo rápido.",zh:"用几个字段描述您的项目，我会尽快回复。",ja:"いくつかの項目でプロジェクトをご記入ください。すぐにご連絡します。",it:"Descrivi il tuo progetto in pochi campi, ti rispondo presto."},
    "Prénom":{en:"First name",es:"Nombre",zh:"名字",ja:"名",it:"Nome"},
    "Nom":{en:"Last name",es:"Apellido",zh:"姓氏",ja:"姓",it:"Cognome"},
    "Email":{en:"Email",es:"Correo electrónico",zh:"邮箱",ja:"メール",it:"Email"},
    "Téléphone":{en:"Phone",es:"Teléfono",zh:"电话",ja:"電話",it:"Telefono"},
    "Type de prestation":{en:"Type of service",es:"Tipo de servicio",zh:"服务类型",ja:"依頼内容",it:"Tipo di servizio"},
    "Logo":{en:"Logo",es:"Logotipo",zh:"标志",ja:"ロゴ",it:"Logo"},
    "Charte graphique / direction artistique":{en:"Brand guidelines / art direction",es:"Manual de marca / dirección artística",zh:"视觉规范 / 艺术指导",ja:"ブランドガイドライン／アートディレクション",it:"Linee guida grafiche / direzione artistica"},
    "Site internet":{en:"Website",es:"Sitio web",zh:"网站",ja:"ウェブサイト",it:"Sito web"},
    "Plusieurs prestations":{en:"Several services",es:"Varios servicios",zh:"多项服务",ja:"複数の依頼",it:"Più servizi"},
    "Autre":{en:"Other",es:"Otro",zh:"其他",ja:"その他",it:"Altro"},
    "Décrivez votre projet":{en:"Describe your project",es:"Describe tu proyecto",zh:"描述您的项目",ja:"プロジェクトの説明",it:"Descrivi il tuo progetto"},
    "Votre besoin, le contexte, vos attentes…":{en:"Your need, the context, your expectations…",es:"Tu necesidad, el contexto, tus expectativas…",zh:"您的需求、背景、期望……",ja:"ご要望、背景、期待することなど…",it:"La tua esigenza, il contesto, le tue aspettative…"},
    "Budget envisagé":{en:"Estimated budget",es:"Presupuesto estimado",zh:"预算",ja:"ご予算",it:"Budget previsto"},
    "Choisir…":{en:"Choose…",es:"Elegir…",zh:"请选择……",ja:"選択…",it:"Scegli…"},
    "Moins de 300 €":{en:"Under €300",es:"Menos de 300 €",zh:"低于 300 €",ja:"300 €未満",it:"Meno di 300 €"},
    "Plus de 2 500 €":{en:"Over €2,500",es:"Más de 2 500 €",zh:"超过 2 500 €",ja:"2 500 €以上",it:"Oltre 2 500 €"},
    "À définir ensemble":{en:"To be defined together",es:"A definir juntos",zh:"共同商定",ja:"相談して決める",it:"Da definire insieme"},
    "Projet à terminer pour le":{en:"Project to be completed by",es:"Proyecto a terminar para el",zh:"项目完成期限",ja:"完成希望日",it:"Progetto da completare entro il"},
    "Envoyer ma demande":{en:"Send my request",es:"Enviar mi solicitud",zh:"提交申请",ja:"送信する",it:"Invia la richiesta"},
    "Demande envoyée\u00a0!":{en:"Request sent!",es:"¡Solicitud enviada!",zh:"申请已发送！",ja:"送信しました！",it:"Richiesta inviata!"},
    "Merci, votre demande a bien été transmise. Je reviendrai vers vous dès que possible.":{en:"Thank you, your request has been sent. I'll get back to you as soon as possible.",es:"Gracias, tu solicitud se ha enviado. Te responderé lo antes posible.",zh:"谢谢，您的申请已成功发送。我会尽快与您联系。",ja:"ありがとうございます。リクエストを受け付けました。できるだけ早くご連絡します。",it:"Grazie, la tua richiesta è stata inviata. Ti risponderò il prima possibile."},
    "Mes projets, un par un.":{en:"My projects, one by one.",es:"Mis proyectos, uno a uno.",zh:"我的项目，逐个呈现。",ja:"プロジェクトを一つずつ。",it:"I miei progetti, uno per uno."},
    "Refonte":{en:"Redesign",es:"Rediseño",zh:"改版",ja:"リデザイン",it:"Restyling"},
    "Identité":{en:"Identity",es:"Identidad",zh:"品牌识别",ja:"アイデンティティ",it:"Identità"},
    "Direction artistique":{en:"Art direction",es:"Dirección artística",zh:"艺术指导",ja:"アートディレクション",it:"Direzione artistica"},
    "Communication":{en:"Communication",es:"Comunicación",zh:"传播",ja:"コミュニケーション",it:"Comunicazione"},
    "Intégration web":{en:"Web integration",es:"Integración web",zh:"网页开发",ja:"ウェブ実装",it:"Integrazione web"},
    "Naming":{en:"Naming",es:"Naming",zh:"命名",ja:"ネーミング",it:"Naming"},
    "Projet 01":{en:"Project 01",es:"Proyecto 01",zh:"项目 01",ja:"プロジェクト 01",it:"Progetto 01"},
    "Projet 02":{en:"Project 02",es:"Proyecto 02",zh:"项目 02",ja:"プロジェクト 02",it:"Progetto 02"},
    "Projet 03":{en:"Project 03",es:"Proyecto 03",zh:"项目 03",ja:"プロジェクト 03",it:"Progetto 03"},
    "Projet 04":{en:"Project 04",es:"Proyecto 04",zh:"项目 04",ja:"プロジェクト 04",it:"Progetto 04"},
    "Refonte complète du site d'un pôle paramédical — kiné, ostéo et médecins du sport — réalisée pendant un stage de deux mois, aux côtés du directeur.":{en:"Complete redesign of the website of a paramedical center — physiotherapists, osteopaths and sports doctors — carried out during a two-month internship, alongside the director.",es:"Rediseño completo del sitio de un centro paramédico — fisioterapeutas, osteópatas y médicos del deporte — realizado durante unas prácticas de dos meses, junto al director.",zh:"在为期两个月的实习中，与负责人共同为一家辅助医疗中心（理疗、整骨与运动医学医生）全面改版网站。",ja:"理学療法・オステオパシー・スポーツ医を擁するパラメディカル施設のサイトを全面リニューアル。2か月のインターンで施設長とともに制作。",it:"Restyling completo del sito di un polo paramedico — fisioterapisti, osteopati e medici dello sport — realizzato durante uno stage di due mesi, insieme al direttore."},
    "Création complète d'une marque d'accompagnement de structures médicales : nom, logo, charte graphique, direction artistique et site internet.":{en:"Complete creation of a brand supporting medical organizations: name, logo, brand guidelines, art direction and website.",es:"Creación completa de una marca de apoyo a estructuras médicas: nombre, logo, manual de marca, dirección artística y sitio web.",zh:"为一家服务医疗机构的品牌进行全方位创建：命名、标志、视觉规范、艺术指导与网站。",ja:"医療機関を支援するブランドをゼロから構築：ネーミング、ロゴ、ブランドガイドライン、アートディレクション、ウェブサイト。",it:"Creazione completa di un marchio a supporto di strutture mediche: nome, logo, linee guida grafiche, direzione artistica e sito web."},
    "Identité et site d'une association étudiante qui promeut le BUT GEA dans les lycées, où je suis chargé de communication.":{en:"Identity and website for a student association that promotes the BUT GEA program in high schools, where I'm in charge of communication.",es:"Identidad y sitio de una asociación estudiantil que promueve el BUT GEA en los institutos, donde soy responsable de comunicación.",zh:"为一个在高中推广 BUT GEA 专业的学生社团打造形象与网站，我在其中负责传播。",ja:"高校で BUT GEA を紹介する学生団体のアイデンティティとサイトを制作。私は広報を担当しています。",it:"Identità e sito di un'associazione studentesca che promuove il BUT GEA nei licei, dove mi occupo della comunicazione."},
    "Identité visuelle d'une marque de détecteurs de fumée et d'alarmes incendie vendus par lots aux entreprises et aux usines.":{en:"Visual identity for a brand of smoke detectors and fire alarms sold in bulk to businesses and factories.",es:"Identidad visual de una marca de detectores de humo y alarmas contra incendios vendidos por lotes a empresas y fábricas.",zh:"为一家向企业和工厂批量销售烟雾探测器与火警警报的品牌设计视觉识别。",ja:"企業や工場に一括販売される煙感知器・火災警報器ブランドのビジュアルアイデンティティ。",it:"Identità visiva di un marchio di rilevatori di fumo e allarmi antincendio venduti in lotti ad aziende e fabbriche."},
    "Voir le projet en détail":{en:"See the full project",es:"Ver el proyecto en detalle",zh:"查看项目详情",ja:"詳細を見る",it:"Vedi il progetto in dettaglio"},

    "En complément":{en:"Also",es:"Además",zh:"补充",ja:"その他",it:"Inoltre"},
    "Projets secondaires":{en:"Side projects",es:"Proyectos secundarios",zh:"其他项目",ja:"サブプロジェクト",it:"Progetti secondari"},
    "Un aperçu de mes autres réalisations, à titre d'illustration.":{en:"A glimpse of my other work, for illustration.",es:"Una muestra de mis otros trabajos, a modo de ilustración.",zh:"我的其他作品一瞥，仅作展示。",ja:"その他の制作物の一例です。",it:"Un assaggio dei miei altri lavori, a titolo illustrativo."},
    "Logo · Concept":{en:"Logo · Concept",es:"Logo · Concepto",zh:"标志 · 概念",ja:"ロゴ · コンセプト",it:"Logo · Concept"},
    "Affiche de film · Concept":{en:"Film poster · Concept",es:"Cartel de cine · Concepto",zh:"电影海报 · 概念",ja:"映画ポスター · コンセプト",it:"Locandina di film · Concept"},
    "Affiche de spectacle · Concept":{en:"Show poster · Concept",es:"Cartel de espectáculo · Concepto",zh:"演出海报 · 概念",ja:"公演ポスター · コンセプト",it:"Locandina di spettacolo · Concept"},
    "Affiche de concert · Concept":{en:"Concert poster · Concept",es:"Cartel de concierto · Concepto",zh:"演唱会海报 · 概念",ja:"コンサートポスター · コンセプト",it:"Locandina di concerto · Concept"},
    "Affiche · Concept":{en:"Poster · Concept",es:"Cartel · Concepto",zh:"海报 · 概念",ja:"ポスター · コンセプト",it:"Poster · Concept"},

    "Tous les projets":{en:"All projects",es:"Todos los proyectos",zh:"所有项目",ja:"すべてのプロジェクト",it:"Tutti i progetti"},
    "Le logo":{en:"The logo",es:"El logo",zh:"标志",ja:"ロゴ",it:"Il logo"},
    "Le brief":{en:"The brief",es:"El briefing",zh:"项目简介",ja:"ブリーフ",it:"Il brief"},
    "Photos du projet":{en:"Project photos",es:"Fotos del proyecto",zh:"项目图片",ja:"プロジェクトの画像",it:"Foto del progetto"},
    "Visiter le site":{en:"Visit the site",es:"Visitar el sitio",zh:"访问网站",ja:"サイトを見る",it:"Visita il sito"},
    "Site indisponible":{en:"Site unavailable",es:"Sitio no disponible",zh:"网站暂不可用",ja:"サイトは利用できません",it:"Sito non disponibile"},
    "Type de projet":{en:"Project type",es:"Tipo de proyecto",zh:"项目类型",ja:"プロジェクトの種類",it:"Tipo di progetto"},
    "Compétences":{en:"Skills",es:"Competencias",zh:"技能",ja:"スキル",it:"Competenze"},
    "Outils utilisés":{en:"Tools used",es:"Herramientas usadas",zh:"使用的工具",ja:"使用ツール",it:"Strumenti utilizzati"},
    "Date de création":{en:"Date",es:"Fecha",zh:"创作日期",ja:"制作時期",it:"Data"},
    "Cible":{en:"Target audience",es:"Público objetivo",zh:"目标受众",ja:"ターゲット",it:"Pubblico"},
    "Couleurs utilisées":{en:"Colours used",es:"Colores usados",zh:"使用的颜色",ja:"使用カラー",it:"Colori utilizzati"},
    "Retour":{en:"Back",es:"Volver",zh:"返回",ja:"戻る",it:"Indietro"},
    "Projet précédent":{en:"Previous project",es:"Proyecto anterior",zh:"上一个项目",ja:"前のプロジェクト",it:"Progetto precedente"},
    "Projet suivant":{en:"Next project",es:"Proyecto siguiente",zh:"下一个项目",ja:"次のプロジェクト",it:"Progetto successivo"},

    "Refonte de site internet":{en:"Website redesign",es:"Rediseño de sitio web",zh:"网站改版",ja:"ウェブサイトのリニューアル",it:"Restyling del sito web"},
    "Identité de marque & site internet":{en:"Brand identity & website",es:"Identidad de marca y sitio web",zh:"品牌识别与网站",ja:"ブランドアイデンティティ＆ウェブサイト",it:"Identità di marca e sito web"},
    "Identité de marque & site":{en:"Brand identity & website",es:"Identidad de marca y sitio",zh:"品牌识别与网站",ja:"ブランドアイデンティティ＆サイト",it:"Identità di marca e sito"},
    "Identité visuelle & site — association":{en:"Visual identity & website — association",es:"Identidad visual y sitio — asociación",zh:"视觉识别与网站 — 社团",ja:"ビジュアルアイデンティティ＆サイト — 団体",it:"Identità visiva e sito — associazione"},
    "Identité visuelle & site (association)":{en:"Visual identity & website (association)",es:"Identidad visual y sitio (asociación)",zh:"视觉识别与网站（社团）",ja:"ビジュアルアイデンティティ＆サイト（団体）",it:"Identità visiva e sito (associazione)"},
    "Identité visuelle — sécurité incendie":{en:"Visual identity — fire safety",es:"Identidad visual — seguridad contra incendios",zh:"视觉识别 — 消防安全",ja:"ビジュアルアイデンティティ — 防火",it:"Identità visiva — sicurezza antincendio"},
    "Identité visuelle & logo":{en:"Visual identity & logo",es:"Identidad visual y logo",zh:"视觉识别与标志",ja:"ビジュアルアイデンティティ＆ロゴ",it:"Identità visiva e logo"},

    "La refonte complète du site d'un pôle paramédical réunissant kinésithérapeutes, ostéopathes et médecins du sport.":{en:"The complete redesign of the website of a paramedical center bringing together physiotherapists, osteopaths and sports doctors.",es:"El rediseño completo del sitio de un centro paramédico que reúne a fisioterapeutas, osteópatas y médicos del deporte.",zh:"为一家汇聚理疗师、整骨师与运动医学医生的辅助医疗中心全面改版网站。",ja:"理学療法士・オステオパス・スポーツ医が集まるパラメディカル施設のサイトを全面リニューアル。",it:"Il restyling completo del sito di un polo paramedico che riunisce fisioterapisti, osteopati e medici dello sport."},
    "La création complète, de A à Z, d'une entreprise d'accompagnement et de gestion de structures médicales : du nom jusqu'au site.":{en:"The complete creation, from A to Z, of a company that supports and manages medical organizations: from the name to the website.",es:"La creación completa, de la A a la Z, de una empresa de apoyo y gestión de estructuras médicas: desde el nombre hasta el sitio.",zh:"从命名到网站，全程打造一家为医疗机构提供陪伴与管理服务的公司。",ja:"医療機関の支援・運営を行う企業を、名前からサイトまで一貫して構築。",it:"La creazione completa, dalla A alla Z, di un'azienda di supporto e gestione di strutture mediche: dal nome al sito."},
    "L'identité et le site d'une association étudiante qui fait découvrir le BUT GEA aux lycéens.":{en:"The identity and website of a student association that introduces high schoolers to the BUT GEA program.",es:"La identidad y el sitio de una asociación estudiantil que da a conocer el BUT GEA a los estudiantes de instituto.",zh:"为向高中生介绍 BUT GEA 的学生社团打造形象与网站。",ja:"高校生に BUT GEA を紹介する学生団体のアイデンティティとサイト。",it:"L'identità e il sito di un'associazione studentesca che fa conoscere il BUT GEA ai liceali."},
    "L'identité d'une marque de détecteurs de fumée et d'alarmes incendie destinés aux entreprises et aux industries.":{en:"The identity of a brand of smoke detectors and fire alarms for businesses and industry.",es:"La identidad de una marca de detectores de humo y alarmas contra incendios para empresas e industrias.",zh:"为面向企业与工业的烟雾探测器与火警品牌打造形象。",ja:"企業・産業向けの煙感知器・火災警報器ブランドのアイデンティティ。",it:"L'identità di un marchio di rilevatori di fumo e allarmi antincendio per aziende e industrie."},

    "Réalisé lors d'un stage de deux mois, ce projet consistait à reprendre entièrement le site existant du pôle. J'ai travaillé en lien direct avec le directeur de la structure pour traduire ses demandes en une interface plus claire, plus moderne et plus simple à parcourir.":{en:"Carried out during a two-month internship, this project involved completely overhauling the center's existing website. I worked directly with the director to translate his requests into a clearer, more modern and easier-to-navigate interface.",es:"Realizado durante unas prácticas de dos meses, este proyecto consistía en rehacer por completo el sitio existente del centro. Trabajé en contacto directo con el director para traducir sus peticiones en una interfaz más clara, moderna y fácil de navegar.",zh:"该项目在为期两个月的实习中完成，目标是彻底重做该中心的现有网站。我与机构负责人直接合作，将他的需求转化为更清晰、更现代、更易浏览的界面。",ja:"2か月のインターンで実施したこのプロジェクトは、施設の既存サイトを全面的に作り直すものでした。施設長と直接やり取りし、要望をより分かりやすく、現代的で、閲覧しやすいインターフェースへと落とし込みました。",it:"Realizzato durante uno stage di due mesi, questo progetto consisteva nel rifare completamente il sito esistente del polo. Ho lavorato a stretto contatto con il direttore per tradurre le sue richieste in un'interfaccia più chiara, moderna e semplice da navigare."},
    "La refonte a porté sur l'organisation des pages, la présentation des praticiens — kinésithérapeutes, ostéopathes et médecins du sport — et l'ensemble de l'habillage visuel, afin de donner au pôle une image professionnelle et rassurante, en accord avec son activité de santé.":{en:"The redesign covered the page structure, the presentation of the practitioners — physiotherapists, osteopaths and sports doctors — and the entire visual styling, to give the center a professional and reassuring image, in line with its healthcare activity.",es:"El rediseño abarcó la organización de las páginas, la presentación de los profesionales — fisioterapeutas, osteópatas y médicos del deporte — y todo el aspecto visual, para dar al centro una imagen profesional y tranquilizadora, acorde con su actividad sanitaria.",zh:"改版涵盖了页面结构、医师（理疗师、整骨师与运动医学医生）的呈现以及整体视觉风格，旨在赋予该中心专业而令人安心的形象，契合其医疗属性。",ja:"リニューアルでは、ページ構成、施術者（理学療法士・オステオパス・スポーツ医）の見せ方、そしてビジュアル全体を見直し、医療という活動にふさわしい、プロフェッショナルで安心感のあるイメージにしました。",it:"Il restyling ha riguardato l'organizzazione delle pagine, la presentazione dei professionisti — fisioterapisti, osteopati e medici dello sport — e tutta la veste grafica, per dare al polo un'immagine professionale e rassicurante, in linea con la sua attività sanitaria."},
    "Amelis Santé accompagne le développement et la gestion de centres médicaux et de cabinets de médecins. Le projet partait d'une page blanche : il fallait donner une existence visuelle à cette entreprise, de son nom jusqu'à son site internet.":{en:"Amelis Santé supports the growth and management of medical centers and doctors' practices. The project started from a blank page: this company needed a visual existence, from its name to its website.",es:"Amelis Santé acompaña el desarrollo y la gestión de centros médicos y consultas. El proyecto partía de cero: había que dar existencia visual a esta empresa, desde su nombre hasta su sitio web.",zh:"Amelis Santé 致力于陪伴医疗中心与诊所的发展与管理。项目从一张白纸开始：需要为这家公司打造从名称到网站的视觉存在。",ja:"Amelis Santé は、医療センターや診療所の成長と運営を支援します。プロジェクトは白紙からのスタートで、名前からウェブサイトまで、この企業に視覚的な存在感を与える必要がありました。",it:"Amelis Santé accompagna lo sviluppo e la gestione di centri medici e studi medici. Il progetto partiva da zero: bisognava dare un'esistenza visiva a questa azienda, dal nome fino al sito web."},
    "J'ai imaginé le nom de la marque, conçu son logo, défini sa charte graphique et sa direction artistique, puis décliné l'ensemble dans un site. L'objectif : inspirer le sérieux et la confiance attendus dans le secteur médical, tout en restant moderne et accessible.":{en:"I came up with the brand name, designed its logo, defined its brand guidelines and art direction, then carried it all over into a website. The goal: to convey the seriousness and trust expected in the medical sector, while staying modern and accessible.",es:"Ideé el nombre de la marca, diseñé su logo, definí su manual de marca y dirección artística, y lo declinié todo en un sitio. El objetivo: inspirar la seriedad y la confianza propias del sector médico, sin dejar de ser moderno y accesible.",zh:"我构思了品牌名称，设计了标志，确定了视觉规范与艺术指导，并将其延展到网站中。目标是传递医疗行业所需的严谨与信任，同时保持现代与亲和。",ja:"ブランド名を考案し、ロゴをデザインし、ブランドガイドラインとアートディレクションを定め、それらをサイトへ展開しました。目的は、医療分野に求められる信頼感と誠実さを伝えつつ、モダンで親しみやすくすることです。",it:"Ho ideato il nome del marchio, disegnato il logo, definito le linee guida grafiche e la direzione artistica, poi declinato il tutto in un sito. L'obiettivo: trasmettere la serietà e la fiducia attese nel settore medico, restando moderno e accessibile."},
    "GEA Pour Tous est une association étudiante qui intervient dans les lycées pour présenter le BUT GEA et aider les lycéens à se projeter dans cette filière. J'y suis chargé de communication.":{en:"GEA Pour Tous is a student association that visits high schools to present the BUT GEA program and help students picture themselves in it. I'm in charge of communication there.",es:"GEA Pour Tous es una asociación estudiantil que acude a los institutos para presentar el BUT GEA y ayudar a los alumnos a proyectarse en esa rama. Soy responsable de comunicación.",zh:"GEA Pour Tous 是一个深入高中的学生社团，介绍 BUT GEA 专业并帮助学生设想自己的发展方向。我在其中负责传播。",ja:"GEA Pour Tous は、高校を訪れて BUT GEA を紹介し、生徒がその進路を思い描けるよう手助けする学生団体です。私は広報を担当しています。",it:"GEA Pour Tous è un'associazione studentesca che interviene nei licei per presentare il BUT GEA e aiutare gli studenti a immaginarsi in questo percorso. Mi occupo della comunicazione."},
    "Pour donner à l'association une image claire et engageante, j'ai créé son logo, sa charte graphique et sa direction artistique, puis conçu son site internet. L'ensemble s'adresse à un public jeune, avec un ton dynamique et accessible qui donne envie d'en savoir plus sur la formation.":{en:"To give the association a clear and engaging image, I created its logo, brand guidelines and art direction, then designed its website. Everything targets a young audience, with a dynamic and accessible tone that makes you want to learn more about the program.",es:"Para dar a la asociación una imagen clara y atractiva, creé su logo, su manual de marca y su dirección artística, y luego diseñé su sitio web. Todo se dirige a un público joven, con un tono dinámico y accesible que invita a conocer más la formación.",zh:"为赋予社团清晰而吸引人的形象，我设计了其标志、视觉规范与艺术指导，并搭建了网站。整体面向年轻群体，语调活力而亲和，让人想进一步了解该专业。",ja:"団体に分かりやすく魅力的なイメージを与えるため、ロゴ・ブランドガイドライン・アートディレクションを制作し、ウェブサイトを設計しました。全体は若い層に向け、ダイナミックで親しみやすいトーンで、学科についてもっと知りたくなるようにしています。",it:"Per dare all'associazione un'immagine chiara e accattivante, ho creato il logo, le linee guida grafiche e la direzione artistica, poi progettato il sito. Il tutto si rivolge a un pubblico giovane, con un tono dinamico e accessibile che invita a scoprire di più sul corso."},
    "Smoke Out est une entreprise spécialisée dans la conception de détecteurs de fumée et d'alarmes incendie, vendus par lots aux entreprises et aux usines.":{en:"Smoke Out is a company specialized in designing smoke detectors and fire alarms, sold in bulk to businesses and factories.",es:"Smoke Out es una empresa especializada en el diseño de detectores de humo y alarmas contra incendios, vendidos por lotes a empresas y fábricas.",zh:"Smoke Out 是一家专注于研发烟雾探测器与火警警报的公司，产品向企业和工厂批量销售。",ja:"Smoke Out は、煙感知器・火災警報器の開発を専門とする企業で、製品は企業や工場に一括販売されています。",it:"Smoke Out è un'azienda specializzata nella progettazione di rilevatori di fumo e allarmi antincendio, venduti in lotti ad aziende e fabbriche."},
    "J'ai travaillé sur son identité visuelle : logo et univers graphique. La direction repose sur un rouge alarme et un noir profond, pour évoquer immédiatement la sécurité, la vigilance et le caractère industriel de la marque.":{en:"I worked on its visual identity: logo and graphic world. The direction is built on an alarm red and a deep black, to immediately evoke safety, vigilance and the brand's industrial character.",es:"Trabajé en su identidad visual: logo y universo gráfico. La dirección se basa en un rojo alarma y un negro profundo, para evocar de inmediato la seguridad, la vigilancia y el carácter industrial de la marca.",zh:"我负责其视觉识别：标志与图形体系。设计以警报红与深黑为主，立刻传达安全、警觉以及品牌的工业气质。",ja:"ロゴとグラフィックの世界観など、ビジュアルアイデンティティを担当しました。方向性は「アラームレッド」と「深い黒」を基調とし、安全性・警戒・そしてブランドの工業的な性格をひと目で感じさせます。",it:"Ho lavorato sulla sua identità visiva: logo e universo grafico. La direzione si basa su un rosso allarme e un nero profondo, per evocare subito sicurezza, vigilanza e il carattere industriale del marchio."},

    "Patients du pôle et personnes à la recherche d'un kinésithérapeute, ostéopathe ou médecin du sport à Antibes.":{en:"Patients of the center and people looking for a physiotherapist, osteopath or sports doctor in Antibes.",es:"Pacientes del centro y personas que buscan un fisioterapeuta, osteópata o médico del deporte en Antibes.",zh:"该中心的患者，以及在昂蒂布寻找理疗师、整骨师或运动医学医生的人。",ja:"施設の患者、およびアンティーブで理学療法士・オステオパス・スポーツ医を探している人。",it:"Pazienti del polo e persone in cerca di un fisioterapista, osteopata o medico dello sport ad Antibes."},
    "Gérants de centres médicaux, médecins et professionnels de santé souhaitant être accompagnés dans leur développement.":{en:"Managers of medical centers, doctors and healthcare professionals seeking support in their growth.",es:"Gerentes de centros médicos, médicos y profesionales de la salud que desean apoyo en su desarrollo.",zh:"希望在发展中获得支持的医疗中心管理者、医生及医疗专业人士。",ja:"成長において支援を求める医療センターの経営者、医師、医療従事者。",it:"Gestori di centri medici, medici e professionisti della sanità che desiderano essere accompagnati nella loro crescita."},
    "Lycéens curieux de découvrir le BUT GEA et futurs candidats à la formation.":{en:"High schoolers curious to discover the BUT GEA program and future applicants.",es:"Estudiantes de instituto con curiosidad por el BUT GEA y futuros candidatos a la formación.",zh:"对 BUT GEA 感兴趣的高中生及该专业的未来报考者。",ja:"BUT GEA に興味のある高校生、そして将来の出願者。",it:"Liceali curiosi di scoprire il BUT GEA e futuri candidati al corso."},
    "Entreprises et industries à la recherche de solutions de sécurité incendie en volume.":{en:"Businesses and industries looking for fire-safety solutions in volume.",es:"Empresas e industrias que buscan soluciones de seguridad contra incendios a gran escala.",zh:"寻求大批量消防安全解决方案的企业与工业客户。",ja:"防火ソリューションを大量に必要とする企業・産業。",it:"Aziende e industrie alla ricerca di soluzioni antincendio in grandi volumi."},

    "Avril – Mai 2026":{en:"April – May 2026",es:"Abril – Mayo 2026",zh:"2026年4月–5月",ja:"2026年4月–5月",it:"Aprile – Maggio 2026"},
    "Avril 2026":{en:"April 2026",es:"Abril 2026",zh:"2026年4月",ja:"2026年4月",it:"Aprile 2026"},
    "Mai 2026":{en:"May 2026",es:"Mayo 2026",zh:"2026年5月",ja:"2026年5月",it:"Maggio 2026"},
    "Février 2026":{en:"February 2026",es:"Febrero 2026",zh:"2026年2月",ja:"2026年2月",it:"Febbraio 2026"}
  };

  /* clés contenant une flèche (ajoutées après, pour éviter la syntaxe de clé calculée) */
  T["Entrer "+A_DR]={en:"Enter "+A_DR,es:"Entrar "+A_DR,zh:"进入 "+A_DR,ja:"入る "+A_DR,it:"Entra "+A_DR};
  T["Tous les projets "+A_R]={en:"All projects "+A_R,es:"Todos los proyectos "+A_R,zh:"所有项目 "+A_R,ja:"すべてのプロジェクト "+A_R,it:"Tutti i progetti "+A_R};

  /* ---------- Moteur ---------- */
  var STORAGE="lk-lang";
  function getLang(){ try{ return localStorage.getItem(STORAGE)||"fr"; }catch(e){ return "fr"; } }
  function saveLang(l){ try{ localStorage.setItem(STORAGE,l); }catch(e){} }
  function norm(s){ return s.replace(/\u2019/g,"'"); }

  var textNodes=[], attrNodes=[], ORIG_TITLE=document.title;

  function inSwitch(node){ var el=node.nodeType===1?node:node.parentNode; return !!(el&&el.closest&&el.closest("#lk-switch")); }

  function collect(){
    var skip={SCRIPT:1,STYLE:1,NOSCRIPT:1};
    var w=document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode:function(n){
        if(!n.nodeValue||!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var p=n.parentNode; if(!p||skip[p.nodeName]) return NodeFilter.FILTER_REJECT;
        if(inSwitch(n)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n; while(n=w.nextNode()){ textNodes.push({node:n, fr:n.nodeValue}); }
    ["placeholder","aria-label","title"].forEach(function(attr){
      document.querySelectorAll("["+attr+"]").forEach(function(el){
        if(el.closest&&el.closest("#lk-switch")) return;
        attrNodes.push({el:el, attr:attr, fr:el.getAttribute(attr)});
      });
    });
  }

  function lookup(fr, lang){
    var key=norm(fr.trim()); var e=T[key];
    return (e&&e[lang])?e[lang]:null;
  }

  function apply(lang){
    textNodes.forEach(function(o){
      if(lang==="fr"){ o.node.nodeValue=o.fr; return; }
      var t=lookup(o.fr,lang);
      if(t!==null){
        var lead=o.fr.match(/^\s*/)[0], trail=o.fr.match(/\s*$/)[0];
        o.node.nodeValue=lead+t+trail;
      } else { o.node.nodeValue=o.fr; }
    });
    attrNodes.forEach(function(o){
      if(!o.fr){ return; }
      if(lang==="fr"){ o.el.setAttribute(o.attr,o.fr); return; }
      var t=lookup(o.fr,lang);
      o.el.setAttribute(o.attr, t!==null?t:o.fr);
    });
    var tt=lookup(ORIG_TITLE,lang); document.title=(lang!=="fr"&&tt)?tt:ORIG_TITLE;
    document.documentElement.lang=lang;
  }

  function flagFor(code){ for(var i=0;i<LANGS.length;i++){ if(LANGS[i].code===code) return LANGS[i].flag; } return FR; }

  function build(){
    var nav=document.querySelector("header .nav"); if(!nav) return;
    var wrap=document.createElement("div"); wrap.id="lk-switch"; wrap.className="lang-switch";
    var btn=document.createElement("button");
    btn.type="button"; btn.className="lang-btn"; btn.setAttribute("aria-label","Language");
    btn.innerHTML='<span class="flag cur-flag"></span><span class="caret">\u25BE</span>';
    var menu=document.createElement("div"); menu.className="lang-menu";
    LANGS.forEach(function(L){
      var o=document.createElement("button");
      o.type="button"; o.className="lang-opt"; o.setAttribute("data-code",L.code);
      o.innerHTML='<span class="flag">'+L.flag+'</span><span class="lang-name">'+L.label+'</span>';
      o.addEventListener("click", function(e){ e.stopPropagation(); choose(L.code); wrap.classList.remove("open"); });
      menu.appendChild(o);
    });
    btn.addEventListener("click", function(e){ e.stopPropagation(); wrap.classList.toggle("open"); });
    document.addEventListener("click", function(){ wrap.classList.remove("open"); });
    wrap.appendChild(btn); wrap.appendChild(menu);

    /* regroupe CTA + sélecteur + burger à droite pour garder la mise en page */
    var group=document.createElement("div"); group.className="nav-right";
    var cta=nav.querySelector(".nav-cta"), burger=nav.querySelector(".burger");
    if(cta) group.appendChild(cta);
    group.appendChild(wrap);
    if(burger) group.appendChild(burger);
    nav.appendChild(group);

    wrap._btnFlag=btn.querySelector(".cur-flag");
    SWITCH=wrap;
  }

  var SWITCH=null;
  function updateCurrent(lang){ if(SWITCH&&SWITCH._btnFlag) SWITCH._btnFlag.innerHTML=flagFor(lang); }
  function choose(lang){ saveLang(lang); apply(lang); updateCurrent(lang); }

  function init(){
    collect(); build();
    var l=getLang(); apply(l); updateCurrent(l);
  }
  if(document.readyState==="loading"){ document.addEventListener("DOMContentLoaded", init); }
  else { init(); }
})();
