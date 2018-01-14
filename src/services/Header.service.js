export const tabs = [
  {
    name:'movies',
    placeholder: 'Movies',
    link: '/movies',
    default: true
  },
  {
    name:'photos',
    placeholder: 'Photos',
    link: '/photos'
  },
  {
    name: 'series',
    placeholder: 'TV Shows',
    link: '/series'
  },
  {
    name:'concerts',
    placeholder: 'Concerts',
    link: '/concerts'
  },
  {
    name: 'backups',
    placeholder: 'Backups',
    link: '/backups'
  }
]

export const findDefaultTab = () => {
  return tabs.find(
    tab => tab.default
  ) || tabs[0]
}