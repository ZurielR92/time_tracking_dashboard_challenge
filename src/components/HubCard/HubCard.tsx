import { Dispatch, FC, SetStateAction } from 'react'

//Importacion de estilos
import styles from './HubCard.module.scss'

//Propiedades que recibe el componente
interface Props {
    mode: string
    handleClick: Dispatch<SetStateAction<string>>
}


export const HubCard:FC<Props> = ( { mode, handleClick } ) => {
    return (
        <div className={ styles.hubcard }>
        <div className={ styles.hub }>
            <img src="/images/image-jeremy.png" alt="" />
            <div className={ styles.title }>
                <small>Report for</small>
                <h1>Jeremy Robson</h1>
            </div>
        </div>
        <ul>
            <li onClick={ () => handleClick('daily') } className={ mode === 'daily' ? styles.active :'' } >Daily</li>
            <li onClick={ () => handleClick('weekly') } className={ mode === 'weekly' ? styles.active : '' } >Weekly</li>
            <li onClick={ () => handleClick('monthly') } className={ mode === 'monthly' ? styles.active : '' } >Monthly</li>
        </ul>
    </div>  
    )

}