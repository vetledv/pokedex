export const colorTypeGradients = (type: string) => {
  //https://github.com/s1varam/pokedex/blob/master/src/utils/utils.js
  //thank you :)
  let color
  switch (type) {
    case 'grass':
      color = '#a8ff98'
      break
    case 'poison':
      color = '#d6a2e4'
      break
    case 'normal':
      color = '#dcdcdc'
      break
    case 'fire':
      color = '#ffb971'
      break
    case 'water':
      color = '#8cc4e2'
      break
    case 'electric':
      color = '#ffe662'
      break
    case 'ice':
      color = '#8cf5e4'
      break
    case 'fighting':
      color = '#da7589'
      break
    case 'ground':
      color = '#e69a74'
      break
    case 'flying':
      color = '#bbc9e4'
      break
    case 'psychic':
      color = '#ffa5da'
      break
    case 'bug':
      color = '#bae05f'
      break
    case 'rock':
      color = '#C9BB8A'
      break
    case 'ghost':
      color = '#8291e0'
      break
    case 'dark':
      color = '#8e8c94'
      break
    case 'dragon':
      color = '#88a2e8'
      break
    case 'steel':
      color = '#9fb8b9'
      break
    case 'fairy':
      color = '#fdb9e9'
      break
    default:
      color = 'gainsboro'
      break
  }
  return color
}
