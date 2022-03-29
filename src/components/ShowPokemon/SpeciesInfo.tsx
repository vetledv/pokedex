import { ISpecies } from '../../interfaces/species'

const SpeciesInfo = (species: ISpecies) => {
  console.log(species)
  //console.log(species.flavor_text_entries[0].flavor_text)
  return (
    <div>
      <div>{species.names[9].name}</div>
      <div>
        {species.flavor_text_entries[0].flavor_text.replace(
          /[^\w, .é\,/, ]/gi,
          ' '
        )}
      </div>
      <div>{species.evolution_chain.url}</div>
    </div>
  )
}
export default SpeciesInfo
