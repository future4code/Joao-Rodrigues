import React from 'react'
import { FilterContainer, GenresContainer, Genre } from './styled'

const Filter = (props) => {
    return (
        <FilterContainer>
            <GenresContainer>
                {props.genreList.map((genre)=>{
                    return(
                        <Genre key={genre.id}>
                            <input 
                                type="checkbox" 
                                value={genre.id}
                                onChange={props.onChangeCheckbox}
                            />
                            <label>{genre.name}</label>
                        </Genre>
                    )
                })}
            </GenresContainer>
           
        </FilterContainer>
    )
}

export default Filter
