export default async (context, locale) => {
  const api = context.$axios

  const { hero, about, what, how, analysis, ...rest } = await api.$get(
    'http://localhost:3000/all/en'
  )

  about.name = 'WE ARE'
  what.name = 'WHAT DO WE DO.'
  how.name = 'HOW DO WE DO IT.'
  analysis.name = 'HOW WE ANALYZE'

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
      'How can we help?',
      'Thank you for contacting us.',
    ],
  }

  const ambassadors = {
    name: 'AMBASSADORS',
  }

  const nav = {
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
    analysis,
    clients,
    portfolio,
    howDidWeDoIt,
    contact,
    ambassadors,
    nav,
  }
}
