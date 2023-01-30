import { FC, ReactNode } from 'react'

//Importacion de estilos
import styles from './CardsGrid.module.scss'

//Propiedades que recibe el componente
interface Props {
    children: ReactNode
    mode: string
}


export const CardsGrid:FC<Props> = ( { children, mode } ) => {
    return (
        <div className={ styles.cardsgrid }>



            { children }

        </div>
    )

}