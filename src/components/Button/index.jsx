import { Button } from './styles'


function BotaoPadrao({nome, ...props}){


    return(

        <Button {...props}>{nome}</Button>

    )


}

export default BotaoPadrao