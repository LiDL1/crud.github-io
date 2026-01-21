// Модуль для работы с данными (Data Service)
const DataService = (function() {
    const STORAGE_KEY = 'levonka_articles';
    
    // Получить текущую дату в формате YYYY-MM-DD
    const getCurrentDate = () => {
        const now = new Date();
        return '2025-' + 
               String(now.getMonth() + 1).padStart(2, '0') + '-' + 
               String(now.getDate()).padStart(2, '0');
    };
    
    // Инициализация начальных данных
    const initializeData = () => {
        if (!localStorage.getItem(STORAGE_KEY)) {
            const defaultArticles = [
                {
                    id: Date.now() - 3,
                    title: "Новый Nendoroid из Cyberpunk 2077",
                    category: "figurkonovosti",
                    categoryName: "Фигурконовости",
                    content: "Good Smile Company анонсировала выпуск Nendoroid Джонни Сильверхенда из Cyberpunk 2077! Фигурка высотой 10 см будет включать сменные лица, несколько вариантов рук, гитару и, конечно же, знаменитый пистолет. Ожидаемая цена — 15 000 рублей. Предзаказ откроется уже на следующей неделе. Лично я уже зарезервировал себе экземпляр, ведь такой детализации в фигурках этой серии еще не было!",
                    previewText: "Анонсирована фигурка Джонни Сильверхенда с гитарой и пистолетом. Высота 10 см, цена около 15 000р.",
                    author: "Левонка",
                    createdAt: "2025-01-15",
                    updatedAt: "2025-01-15",
                    isFeatured: true
                },
                {
                    id: Date.now() - 2,
                    title: "Как победить стресс за 5 минут",
                    category: "stress",
                    categoryName: "Стресс",
                    content: `В современном мире стресс стал постоянным спутником. Но есть простой способ справиться с ним за 5 минут.

Метод "5-4-3-2-1":
1. Назовите 5 вещей, которые видите вокруг себя
2. 4 предмета, которых можете потрогать
3. 3 звука, которые слышите прямо сейчас
4. 2 запаха, которые чувствуете
5. 1 вкус, который можете ощутить (можно даже взять конфету)

Эта техника переключает мозг из режима паники в режим наблюдения. Попробуйте прямо сейчас — работает безотказно!

Личный опыт: использую этот метод перед важными встречами и когда чувствую перегрузку.`,
                    previewText: "Простая техника '5-4-3-2-1' для моментального снятия стресса. Работает в любой ситуации.",
                    author: "Левонка",
                    createdAt: "2025-01-18",
                    updatedAt: "2025-01-18",
                    isFeatured: true
                },
                {
                    id: Date.now() - 1,
                    title: "Идеальный кофе по-венски",
                    category: "cooking",
                    categoryName: "Кулинария",
                    content: `Секрет идеального кофе по-венски — не только в качестве кофе, но и в пропорциях.

Ингредиенты:
- 200 мл свежесваренного эспрессо
- 50 мл взбитых сливок (жирность не менее 33%)
- Щепотка какао или корицы (по желанию)

Инструкция:
1. Сварите крепкий эспрессо
2. Взбейте холодные сливки до состояния мягких пиков
3. Налейте кофе в предварительно прогретый бокал
4. Аккуратно выложите сливки ложкой на поверхность кофе
5. Не перемешивать! Сверху добавьте какао или корицу

Важный момент: пить нужно через слой сливок — это и есть главное удовольствие! Сливки постепенно смешиваются с кофе, создавая неповторимый вкус.

Совет от Левонки: используйте венские бокалы — они лучше сохраняют температуру.`,
                    previewText: "Рецепт идеального кофе по-венски: правильные пропорции и техника подачи. Наслаждение в каждой капле.",
                    author: "Левонка",
                    createdAt: "2025-01-20",
                    updatedAt: "2025-01-20",
                    isFeatured: false
                },
                {
                    id: Date.now() - 4,
                    title: "Новый патч в Cyberpunk 2077",
                    category: "igronovosti",
                    categoryName: "Игроновости",
                    content: `CD Projekt RED выпустила масштабный патч 2.1 для Cyberpunk 2077! Основные изменения:

🎮 Игровой процесс:
- Добавлена система метро с 5 линиями и 19 станциями
- Восстановлены вырезанные квесты с Деннисом Крейн
- Улучшена ИИ полиции и враждебных NPC

🚗 Транспорт:
- Новая гоночная лига с 5 трассами
- Улучшенная физика вождения
- Возможность слушать радио вне автомобиля

🎵 Разное:
- Романтика с Джонни Сильверхендом (опционально)
- Более 100 новых предметов одежды
- Улучшен Ray Tracing на всех платформах

Папч уже доступен для загрузки. Лично проверил — игра действительно стала другой!`,
                    previewText: "Вышел патч 2.1 для Cyberpunk 2077 с метро, новыми квестами и улучшениями графики.",
                    author: "Левонка",
                    createdAt: "2025-01-22",
                    updatedAt: "2025-01-22",
                    isFeatured: true
                },
                {
                    id: Date.now() - 5,
                    title: "Фигурка Геральта из нового Ведьмака",
                    category: "figurkonovosti",
                    categoryName: "Фигурконовости",
                    content: `Prime 1 Studio представила эксклюзивную фигурку Геральта из грядущей игры "Ведьмак 4: Наследие крови".

Характеристики:
- Высота: 60 см (с подставком)
- Материал: полистоун, ПВХ, металл
- Количество деталей: более 150
- Вес: 8 кг
- Цена: 89 000 рублей

Особенности:
- Съемный плащ с магнитным креплением
- 3 сменных лица
- 5 вариантов рук с оружием
- Светодиодная подсветка в медальоне и глазах
- Диорамный подставок с руинами замка

Предзаказ открыт до 15 марта 2025 года. Ожидаемая доставка — IV квартал 2026.

Личное мнение: цена кусается, но для коллекционеров — must have!`,
                    previewText: "Эксклюзивная фигурка Геральта высотой 60 см от Prime 1 Studio. Предзаказ до 15 марта.",
                    author: "Левонка",
                    createdAt: "2025-01-25",
                    updatedAt: "2025-01-25",
                    isFeatured: true
                }
            ];
            localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultArticles));
            return defaultArticles;
        }
        return JSON.parse(localStorage.getItem(STORAGE_KEY));
    };

    // Получить все статьи
    const getAllArticles = () => {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    };

    // Получить статью по ID
    const getArticleById = (id) => {
        const articles = getAllArticles();
        return articles.find(article => article.id === id);
    };

    // Сохранить статью
    const saveArticle = (articleData, isEdit = false) => {
        const articles = getAllArticles();
        const currentDate = getCurrentDate();
        
        if (isEdit) {
            // Редактирование существующей статьи
            const index = articles.findIndex(a => a.id === articleData.id);
            if (index !== -1) {
                articles[index] = {
                    ...articles[index],
                    ...articleData,
                    updatedAt: currentDate
                };
            }
        } else {
            // Создание новой статьи
            const newArticle = {
                id: Date.now(),
                ...articleData,
                createdAt: currentDate,
                updatedAt: currentDate,
                isFeatured: false
            };
            articles.push(newArticle);
        }
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
        return true;
    };

    // Удалить статью
    const deleteArticle = (id) => {
        const articles = getAllArticles();
        const filteredArticles = articles.filter(article => article.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredArticles));
        return true;
    };

    // Получить статьи по категории
    const getArticlesByCategory = (category) => {
        const articles = getAllArticles();
        if (category === 'all') return articles;
        return articles.filter(article => article.category === category);
    };

    // Проверить, пустая ли категория
    const isCategoryEmpty = (category) => {
        const articles = getArticlesByCategory(category);
        return articles.length === 0;
    };

    // Получить количество статей
    const getArticlesCount = () => {
        return getAllArticles().length;
    };

    // Получить сегодняшние статьи
    const getTodayArticles = () => {
        const articles = getAllArticles();
        const today = getCurrentDate();
        return articles.filter(article => article.createdAt === today);
    };

    return {
        initializeData,
        getAllArticles,
        getArticleById,
        saveArticle,
        deleteArticle,
        getArticlesByCategory,
        isCategoryEmpty,
        getArticlesCount,
        getTodayArticles,
        getCurrentDate
    };
})();

// Модуль для отрисовки UI
const UIRenderer = (function() {
    // Отобразить карточки статей
    const renderArticles = (articles, containerId, category = 'all') => {
        const container = document.getElementById(containerId);
        if (!container) return;

        if (articles.length === 0) {
            // Получить отображаемое имя категории
            const categoryNames = {
                'all': 'Все статьи',
                'figurkonovosti': 'Фигурконовости',
                'igronovosti': 'Игроновости',
                'stress': 'Стресс',
                'cooking': 'Кулинария'
            };
            
            const categoryName = categoryNames[category] || 'этой категории';
            
            container.innerHTML = `
                <div class="no-articles">
                    <i class="fas fa-newspaper"></i>
                    <h3>В ${categoryName} пока нет статей</h3>
                    <p>Будьте первым, кто поделится мудростью в этой категории!</p>
                    <button class="btn btn-primary create-first-article-btn" data-category="${category}">
                        <i class="fas fa-plus"></i> Создать первую статью
                    </button>
                </div>
            `;
            return;
        }

        // Сортируем статьи по дате (новые сверху)
        const sortedArticles = [...articles].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        const articlesHTML = sortedArticles.map(article => `
            <article class="article-card" data-id="${article.id}">
                <div class="category-badge">${article.categoryName}</div>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-preview-text">${article.previewText || article.content.substring(0, 150) + '...'}</p>
                <div class="article-meta">
                    <div class="article-info">
                        <span class="article-author">${article.author}</span>
                        <span class="article-date">${article.createdAt}</span>
                    </div>
                    <div class="article-actions">
                        <button class="action-btn edit-btn" data-id="${article.id}">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="action-btn delete-btn" data-id="${article.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </article>
        `).join('');

        container.innerHTML = articlesHTML;
    };

    // Отобразить полную статью в модальном окне
    const renderFullArticle = (article, containerId) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = `
            <div class="article-full">
                <div class="article-header">
                    <span class="article-category">${article.categoryName}</span>
                    <h2 class="article-title">${article.title}</h2>
                    <div class="article-meta">
                        <span class="article-author">${article.author}</span>
                        <span class="article-date">Опубликовано: ${article.createdAt}</span>
                        ${article.updatedAt !== article.createdAt ? 
                            `<span class="article-updated">Обновлено: ${article.updatedAt}</span>` : ''}
                    </div>
                </div>
                <div class="article-content">
                    ${article.content.split('\n').map(p => `<p>${p}</p>`).join('')}
                </div>
                <div class="article-footer">
                    <button class="btn btn-outline edit-article-btn" data-id="${article.id}">
                        <i class="fas fa-edit"></i> Редактировать
                    </button>
                    <button class="btn btn-primary close-modal-btn">
                        <i class="fas fa-times"></i> Закрыть
                    </button>
                </div>
            </div>
        `;
    };

    // Отобразить форму редактирования
    const renderEditForm = (article) => {
        document.getElementById('articleTitle').value = article.title;
        document.getElementById('articleCategory').value = article.category;
        document.getElementById('articleContent').value = article.content;
        document.getElementById('articlePreview').value = article.previewText || '';
        document.getElementById('charCount').textContent = article.content.length;
        document.getElementById('previewCount').textContent = (article.previewText || '').length;
        
        // Обновить предпросмотр
        updatePreview();
        
        // Показать форму
        document.getElementById('articleFormSection').style.display = 'grid';
        document.getElementById('createArticleBtn').innerHTML = '<i class="fas fa-times"></i> Скрыть форму';
        
        // Изменить заголовок формы
        document.querySelector('.form-title').textContent = 'Редактировать статью';
        
        // Добавить ID статьи в форму
        const form = document.getElementById('articleForm');
        form.dataset.editId = article.id;
    };

    // Обновить предпросмотр
    const updatePreview = () => {
        const title = document.getElementById('articleTitle').value;
        const category = document.getElementById('articleCategory').value;
        const content = document.getElementById('articleContent').value;
        const previewText = document.getElementById('articlePreview').value;
        
        const categoryNames = {
            'figurkonovosti': 'Фигурконовости',
            'igronovosti': 'Игроновости',
            'stress': 'Стресс',
            'cooking': 'Кулинария'
        };

        const previewHTML = `
            <div class="category-badge">${categoryNames[category] || 'Категория'}</div>
            <h3 class="article-title">${title || 'Заголовок статьи'}</h3>
            <p class="article-preview-text">${previewText || (content ? content.substring(0, 150) + '...' : 'Превью-текст появится здесь')}</p>
            <div class="article-meta">
                <div class="article-info">
                    <span class="article-author">Левонка</span>
                    <span class="article-date">${DataService.getCurrentDate()}</span>
                </div>
                <div class="article-actions">
                    <button class="action-btn">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;

        document.getElementById('articlePreviewCard').innerHTML = previewHTML;
    };

    return {
        renderArticles,
        renderFullArticle,
        renderEditForm,
        updatePreview
    };
})();

// Модуль для управления темой
const ThemeManager = (function() {
    const toggleButton = document.getElementById('themeToggle');
    const themeIcon = toggleButton?.querySelector('i');

    // Инициализировать тему
    const init = () => {
        const savedTheme = localStorage.getItem('levonka_theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateIcon(savedTheme);
    };

    // Переключить тему
    const toggle = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('levonka_theme', newTheme);
        updateIcon(newTheme);
    };

    // Обновить иконку
    const updateIcon = (theme) => {
        if (!themeIcon) return;
        themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    };

    return { init, toggle };
})();

// Модуль для валидации форм
const FormValidator = (function() {
    // Валидация формы статьи
    const validateArticleForm = () => {
        let isValid = true;
        
        // Валидация заголовка
        const title = document.getElementById('articleTitle').value.trim();
        const titleError = document.getElementById('titleError');
        if (!title || title.length < 5) {
            titleError.textContent = 'Заголовок должен содержать минимум 5 символов';
            isValid = false;
        } else if (title.length > 100) {
            titleError.textContent = 'Заголовок не должен превышать 100 символов';
            isValid = false;
        } else {
            titleError.textContent = '';
        }

        // Валидация категории
        const category = document.getElementById('articleCategory').value;
        const categoryError = document.getElementById('categoryError');
        if (!category) {
            categoryError.textContent = 'Пожалуйста, выберите категорию';
            isValid = false;
        } else {
            categoryError.textContent = '';
        }

        // Валидация контента
        const content = document.getElementById('articleContent').value.trim();
        const contentError = document.getElementById('contentError');
        if (!content || content.length < 50) {
            contentError.textContent = 'Содержание должно содержать минимум 50 символов';
            isValid = false;
        } else if (content.length > 5000) {
            contentError.textContent = 'Содержание не должно превышать 5000 символов';
            isValid = false;
        } else {
            contentError.textContent = '';
        }

        return isValid;
    };

    return { validateArticleForm };
})();

// Основной модуль приложения
const App = (function(DataService, UIRenderer, ThemeManager, FormValidator) {
    // Текущая категория фильтра
    let currentCategory = 'all';
    
    // Инициализация приложения
    const init = () => {
        // Инициализировать данные
        DataService.initializeData();
        
        // Инициализировать тему
        ThemeManager.init();
        
        // Обработать действия из админки
        handleAdminActions();
        
        // Загрузить статьи
        loadArticles();
        
        // Обновить счетчик статей
        updateArticlesCount();
        
        // Настроить обработчики событий
        setupEventListeners();
        
        // Настроить фильтрацию по категориям
        setupCategoryFilter();
        
        // Начать обновление предпросмотра
        startPreviewUpdates();
    };

    // Обработка действий из админки
    const handleAdminActions = () => {
        const action = localStorage.getItem('adminAction');
        const articleId = localStorage.getItem('adminArticleId');
        
        if (action && articleId) {
            const id = parseInt(articleId);
            const article = DataService.getArticleById(id);
            
            if (article) {
                if (action === 'edit') {
                    // Показать форму редактирования
                    setTimeout(() => {
                        UIRenderer.renderEditForm(article);
                        // Прокрутить к форме
                        document.getElementById('articleFormSection').scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 500);
                } else if (action === 'view') {
                    // Открыть статью в модальном окне
                    setTimeout(() => {
                        openArticleModal(id);
                    }, 500);
                }
            }
            
            // Очистить данные из админки
            localStorage.removeItem('adminAction');
            localStorage.removeItem('adminArticleId');
        } else if (action === 'create') {
            // Показать форму создания
            setTimeout(() => {
                toggleArticleForm();
            }, 500);
            localStorage.removeItem('adminAction');
        }
    };

    // Загрузить статьи
    const loadArticles = (category = 'all') => {
        currentCategory = category;
        const articles = DataService.getArticlesByCategory(category);
        UIRenderer.renderArticles(articles, 'articlesGrid', category);
    };

    // Обновить счетчик статей
    const updateArticlesCount = () => {
        const count = DataService.getArticlesCount();
        const totalArticlesElement = document.getElementById('totalArticles');
        if (totalArticlesElement) {
            totalArticlesElement.textContent = count;
        }
    };

    // Настроить обработчики событий
    const setupEventListeners = () => {
        // Переключение темы
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', ThemeManager.toggle);
        }

        // Кнопка создания статьи
        const createBtn = document.getElementById('createArticleBtn');
        if (createBtn) {
            createBtn.addEventListener('click', toggleArticleForm);
        }

        // Кнопка отмены формы
        const cancelBtn = document.getElementById('cancelFormBtn');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', toggleArticleForm);
        }

        // Отправка формы
        const form = document.getElementById('articleForm');
        if (form) {
            form.addEventListener('submit', handleFormSubmit);
        }

        // Закрытие модального окна
        const modalClose = document.getElementById('modalClose');
        if (modalClose) {
            modalClose.addEventListener('click', closeModal);
        }

        // Клик по фону модального окна
        const modal = document.getElementById('articleModal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });
        }

        // Делегирование событий для карточек статей
        document.addEventListener('click', handleArticleActions);
        
        // Делегирование событий для кнопок создания первой статьи
        document.addEventListener('click', handleCreateFirstArticle);
        
        // Делегирование событий для модального окна
        document.addEventListener('click', handleModalActions);
    };

    // Обработка действий в модальном окне
    const handleModalActions = (e) => {
        // Кнопка редактирования в модальном окне
        if (e.target.closest('.edit-article-btn')) {
            const articleId = parseInt(e.target.closest('button').dataset.id);
            editArticle(articleId);
        }
        
        // Кнопка закрытия в модальном окне
        if (e.target.closest('.close-modal-btn')) {
            closeModal();
        }
    };

    // Обработка кнопки "Создать первую статью"
    const handleCreateFirstArticle = (e) => {
        if (e.target.closest('.create-first-article-btn')) {
            const button = e.target.closest('.create-first-article-btn');
            const category = button.dataset.category;
            
            // Показать форму создания статьи
            toggleArticleForm();
            
            // Установить выбранную категорию в форме
            if (category && category !== 'all') {
                setTimeout(() => {
                    const categorySelect = document.getElementById('articleCategory');
                    if (categorySelect) {
                        categorySelect.value = category;
                        UIRenderer.updatePreview();
                    }
                }, 100);
            }
        }
    };

    // Настроить фильтрацию по категориям
    const setupCategoryFilter = () => {
        // Навигация по категориям
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const category = link.dataset.category;
                
                // Обновить активные ссылки
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Обновить активные кнопки фильтра
                const filterBtns = document.querySelectorAll('.filter-btn');
                filterBtns.forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.filter === category);
                });
                
                // Загрузить статьи выбранной категории
                loadArticles(category);
                
                // Прокрутить к статьям
                document.querySelector('.articles-section').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });

        // Кнопки фильтрации
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                
                // Обновить активные кнопки
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Обновить активные ссылки в навигации
                const navLinks = document.querySelectorAll('.nav-link');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.dataset.category === filter);
                });
                
                // Загрузить статьи
                loadArticles(filter);
            });
        });
    };

    // Переключить форму статьи
    const toggleArticleForm = () => {
        const formSection = document.getElementById('articleFormSection');
        const createBtn = document.getElementById('createArticleBtn');
        
        if (formSection.style.display === 'none' || !formSection.style.display) {
            // Показать форму
            formSection.style.display = 'grid';
            createBtn.innerHTML = '<i class="fas fa-times"></i> Скрыть форму';
            
            // Прокрутить к форме
            setTimeout(() => {
                formSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
            
            // Сбросить форму
            resetForm();
        } else {
            // Скрыть форму
            formSection.style.display = 'none';
            createBtn.innerHTML = '<i class="fas fa-plus"></i> Новая статья';
        }
    };

    // Сбросить форму
    const resetForm = () => {
        const form = document.getElementById('articleForm');
        form.reset();
        form.dataset.editId = '';
        
        // Сбросить ошибки
        document.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
        });
        
        // Сбросить счетчики
        document.getElementById('charCount').textContent = '0';
        document.getElementById('previewCount').textContent = '0';
        
        // Обновить предпросмотр
        UIRenderer.updatePreview();
        
        // Изменить заголовок формы
        document.querySelector('.form-title').textContent = 'Создать новую статью';
        
        // Установить категорию из текущего фильтра, если она есть
        if (currentCategory && currentCategory !== 'all') {
            const categorySelect = document.getElementById('articleCategory');
            if (categorySelect) {
                categorySelect.value = currentCategory;
                UIRenderer.updatePreview();
            }
        }
    };

    // Обработка отправки формы
    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // Валидация формы
        if (!FormValidator.validateArticleForm()) {
            return;
        }

        // Сбор данных формы
        const formData = {
            title: document.getElementById('articleTitle').value.trim(),
            category: document.getElementById('articleCategory').value,
            categoryName: {
                'figurkonovosti': 'Фигурконовости',
                'igronovosti': 'Игроновости',
                'stress': 'Стресс',
                'cooking': 'Кулинария'
            }[document.getElementById('articleCategory').value],
            content: document.getElementById('articleContent').value.trim(),
            previewText: document.getElementById('articlePreview').value.trim(),
            author: 'Левонка'
        };

        // Проверка на редактирование
        const isEdit = e.target.dataset.editId;
        
        if (isEdit) {
            formData.id = parseInt(isEdit);
            DataService.saveArticle(formData, true);
        } else {
            DataService.saveArticle(formData, false);
        }

        // Скрыть форму
        toggleArticleForm();
        
        // Перезагрузить статьи с текущей категорией
        loadArticles(currentCategory);
        
        // Обновить счетчик
        updateArticlesCount();
        
        // Показать уведомление
        showNotification(isEdit ? 'Статья обновлена!' : 'Статья создана!');
    };

    // Обработка действий со статьями
    const handleArticleActions = (e) => {
        // Клик по карточке статьи (просмотр)
        if (e.target.closest('.article-card') && !e.target.closest('.article-actions')) {
            const articleId = parseInt(e.target.closest('.article-card').dataset.id);
            openArticleModal(articleId);
        }
        
        // Кнопка редактирования
        if (e.target.closest('.edit-btn')) {
            const articleId = parseInt(e.target.closest('button').dataset.id);
            editArticle(articleId);
        }
        
        // Кнопка удаления
        if (e.target.closest('.delete-btn')) {
            const articleId = parseInt(e.target.closest('button').dataset.id);
            deleteArticle(articleId);
        }
    };

    // Открыть статью в модальном окне
    const openArticleModal = (articleId) => {
        const article = DataService.getArticleById(articleId);
        if (!article) return;
        
        UIRenderer.renderFullArticle(article, 'modalBody');
        document.getElementById('articleModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    };

    // Закрыть модальное окно
    const closeModal = () => {
        document.getElementById('articleModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    // Редактировать статью
    const editArticle = (articleId) => {
        const article = DataService.getArticleById(articleId);
        if (!article) return;
        
        closeModal();
        UIRenderer.renderEditForm(article);
    };

    // Удалить статью
    const deleteArticle = (articleId) => {
        if (!confirm('Вы уверены, что хотите удалить эту статью?')) {
            return;
        }
        
        DataService.deleteArticle(articleId);
        
        // Перезагрузить статьи с текущей категорией
        loadArticles(currentCategory);
        
        // Обновить счетчик
        updateArticlesCount();
        
        // Показать уведомление
        showNotification('Статья удалена!');
    };

    // Начать обновление предпросмотра
    const startPreviewUpdates = () => {
        const inputs = ['articleTitle', 'articleCategory', 'articleContent', 'articlePreview'];
        
        inputs.forEach(inputId => {
            const input = document.getElementById(inputId);
            if (input) {
                input.addEventListener('input', () => {
                    UIRenderer.updatePreview();
                    
                    // Обновить счетчики символов
                    if (inputId === 'articleContent') {
                        document.getElementById('charCount').textContent = input.value.length;
                    }
                    if (inputId === 'articlePreview') {
                        document.getElementById('previewCount').textContent = input.value.length;
                    }
                });
            }
        });
    };

    // Показать уведомление
    const showNotification = (message) => {
        // Создать элемент уведомления
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--text-primary);
            color: var(--primary-bg);
            padding: 15px 25px;
            border: 2px solid var(--border-color);
            z-index: 3000;
            animation: slideIn 0.3s ease-out;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-size: 0.9rem;
        `;
        
        // Добавить стили для анимации
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notification);
        
        // Удалить уведомление через 3 секунды
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out forwards';
            setTimeout(() => {
                document.body.removeChild(notification);
                document.head.removeChild(style);
            }, 300);
        }, 3000);
    };

    return { init };
})(DataService, UIRenderer, ThemeManager, FormValidator);

// Инициализировать приложение при загрузке страницы
document.addEventListener('DOMContentLoaded', App.init);