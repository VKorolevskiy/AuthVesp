export default {
  project: 'Vesp',
  greetings: {
    title: 'Добро пожаловать!',
    message: 'Выберите пункт меню для начала работы',
  },
  security: {
    username: 'Логин',
    password: 'Пароль',
    confirmpassword: 'Повторите пароль',
    login: 'Вход',
    logout: 'Выход',
    register: 'Регистрация',
    greetings: 'Привет!',
    goodbye: 'Пока, пока...',
    profile: 'Профиль',
    success: 'Успешно!',
    success_update_message: 'Ваш профиль был успешно обновлён!',
  },
  models: {
    user: {
      title_one: 'Пользователь',
      title_many: 'Пользователи',
      username: 'Логин',
      fullname: 'Полное имя',
      password: 'Пароль',
      email: 'Email',
      active: 'Активно',
      role: 'Группа',
      action_code: 'Код из сообщения',
    },
    user_role: {
      title_one: 'Группа',
      title_many: 'Группы',
      title: 'Название',
      scope: 'Разрешения',
      add_scope: 'Добавить',
    },
  },
  errors: {
    security: {
      inactive: 'Ваш аккаунт неактивен',
      confirmpassword: 'Пароли не совпадают',
      wrong: 'Неправильное имя или пароль',
      active: 'Ваш аккаунт уже зарегистрирован',
    },
  },
}
