export default [
  'General',
  [
    {
      to: '/',
      icon: 'desktop-mac',
      label: 'Escritorio'
    }
  ],
  'Pacientes',
  [
    {
      to: '/crear-pacientes',
      label: 'Nuevo expediente',
      icon: 'mdi mdi-account-plus default',
      updateMark: false
    },
    {
      to: '/lista-pacientes',
      label: 'Lista de pacientes',
      icon: 'mdi mdi-table default',
      updateMark: false
    },
    {
      to: '/pacientes',
      label: 'Pacientes',
      icon: 'mdi mdi-table default',
      updateMark: false
    },
    {
      to: '/profile',
      label: 'Profile',
      icon: 'account-circle'
    },
    {
      to: '/login',
      label: 'Login',
      icon: 'lock'
    },
    {
      label: 'Submenus',
      subLabel: 'Submenus Example',
      icon: 'view-list',
      menu: [
        {
          href: '#void',
          label: 'Sub-item One'
        },
        {
          href: '#void',
          label: 'Sub-item Two'
        }
      ]
    }
  ],
  'Otros',
  [
    {
      href: 'https://github.com/JuanShotLC',
      label: ' Colegas a referir',
      icon: 'mdi mdi-doctor default',
      target: '_blank'
    },
    {
      href: 'https://github.com/JuanShotLC',
      label: ' Centros a referir ',
      icon: 'mdi mdi-hospital-building default',
      target: '_blank'
    },
    {
      href: 'https://github.com/JuanShotLC',
      label: 'Laboratorios',
      icon: 'mdi mdi-test-tube default',
      target: '_blank'
    }
  ]
]
