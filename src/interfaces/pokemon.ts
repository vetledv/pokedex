export interface IData {
  count: number
  next: string | null
  previous: string | null
  results: Result[]
}

export interface Result {
  name: string
  url: string
  error?: Error
}

export interface IPokemon {
  abilities: Ability[]
  base_experience: number
  forms: Species[]
  game_indices: GameIndex[]
  height: number
  held_items: any[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Move[]
  name: string
  order: number
  past_types: any[]
  species: Species
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  weight: number
}

export interface Ability {
  ability: Species
  is_hidden: boolean
  slot: number
}

export interface Species {
  name: string
  url: string
}

export interface GameIndex {
  game_index: number
  version: Species
}

export interface Move {
  move: Species
  version_group_details: VersionGroupDetail[]
}

export interface VersionGroupDetail {
  level_learned_at: number
  move_learn_method: Species
  version_group: Species
}

export interface Versions {
  'generation-i': GenerationI
  'generation-ii': GenerationII
  'generation-iii': GenerationIII
  'generation-iv': GenerationIV
  'generation-v': GenerationV
  'generation-vi': { [key: string]: GenerationVI }
  'generation-vii': GenerationVII
  'generation-viii': GenerationVIII
}

export interface Sprites {
  back_default: string
  back_female: null
  back_shiny: string
  back_shiny_female: null
  front_default: string
  front_female: null
  front_shiny: string
  front_shiny_female: null
  other?: Other
  versions?: Versions
  animated?: Sprites
}

export interface OfficialArtwork {
  front_default: string
}

export interface Stat {
  base_stat: number
  effort: number
  stat: Species
}

export interface Type {
  slot: number
  type: Species
}

export interface RedBlue {
  back_default: string
  back_gray: string
  front_default: string
  front_gray: string
}

export interface Crystal {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}

export interface Emerald {
  front_default: string
  front_shiny: string
}

export interface DreamWorld {
  front_default: string
  front_female: null
}

export interface Other {
  dream_world: DreamWorld
  'official-artwork': OfficialArtwork
}

/*****GENERATION*****/
/********************/

export interface GenerationI {
  'red-blue': RedBlue
  yellow: RedBlue
}

export interface GenerationII {
  crystal: Crystal
  gold: Crystal
  silver: Crystal
}

export interface GenerationIII {
  emerald: Emerald
  'firered-leafgreen': Crystal
  'ruby-sapphire': Crystal
}

export interface GenerationIV {
  'diamond-pearl': Sprites
  'heartgold-soulsilver': Sprites
  platinum: Sprites
}
export interface GenerationV {
  'black-white': Sprites
}

export interface GenerationVI {
  front_default: string
  front_female: null
  front_shiny: string
  front_shiny_female: null
}

export interface GenerationVII {
  icons: DreamWorld
  'ultra-sun-ultra-moon': GenerationVI
}

export interface GenerationVIII {
  icons: DreamWorld
}
