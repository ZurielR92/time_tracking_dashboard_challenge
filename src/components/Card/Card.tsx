import { FC , useEffect, useState} from 'react'
import { iData } from '../../utils/types'

//Importacion de estilos
import styles from './Card.module.scss'

//Propiedades que recibe el componente
interface Props {
    data: iData
    mode: string
    color: string
}


export const Card:FC<Props> = ( { data, mode, color } ) => {

    const [ hours, setHours ] = useState<{ current: string, previous: string }>( { current: '', previous:'' } )

    useEffect(() => {
      
        switch (mode) {
            case 'daily':
                setHours({
                    current: `${ data.timeframes.daily.current }hrs`,
                    previous: `Last day - ${ data.timeframes.daily.previous }hrs`
                })
                break;
            case 'weekly':
                setHours({
                    current: `${ data.timeframes.weekly.current }hrs`,
                    previous: `Last week - ${ data.timeframes.weekly.previous }hrs`
                })
                break;
            case 'monthly':
                setHours({
                    current: `${ data.timeframes.monthly.current }hrs`,
                    previous: `Last month - ${ data.timeframes.monthly.previous }hrs`
                })
                break;
        }

    }, [mode])
    

    return (
        <div style={{ background:color }} className={ styles.card }>
            <img src={ `images/icon-${ data.title.replace(' ', '-') }.svg` } alt="" />


            <div className={ styles.body }>
                <div className={ styles.title }>
                    <span>{ data.title }</span>
                    ...
                </div>
                <span className={ styles.hours }>{ hours.current }</span>
                <span className={ styles.previous }>{ hours.previous }</span>
            </div>


            

        </div>
    )

}