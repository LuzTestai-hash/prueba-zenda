export default async (context, locale) => {
  const api = context.$axios

  const { hero, about, what, how, ...rest } = await api.$get('/all/en')

  about.name = 'WE ARE'
  what.name = 'WHAT DO WE DO.'
  how.name = 'HOW DO WE DO IT.'

  const analyses = {
    name: 'HOW WE ANALYZE',
    analyses: rest.analyses,
  }

  const clients = {
    title: 'They trust us',
  }

  const portfolio = {
    name: 'WHAT WE ACHIEVED.',
    items: rest.portfolio,
  }

  const howDidWeDoIt = {
    name: 'HOW DID WE DO IT.',
  }

  const contact = {
    name: 'WE STARTED.',
    form: [
      'Tell us your name.',
      'Write us your Email.',
      'Company.',
      'How can we help?',
      'Thank you for contacting us.',
    ],
  }

  const ambassadors = {
    name: 'AMBASSADORS',
  }

  const nav = {
    aboutMobile: 'We are',
    about: 'We are Zenda',
    what: 'What do we do',
    how: 'How do we do it',
    portfolio: 'What we achieved',
    howDid: 'How did we do it',
  }

  return {
    hero,
    about,
    what,
    how,
    analyses,
    clients,
    portfolio,
    howDidWeDoIt,
    contact,
    ambassadors,
    nav,
  }
}
