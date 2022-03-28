import {React,useState} from 'react';
import { Button,Stack  } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

function Contador(){
    let [contador,setContador] = useState(0);
    const decrementar=( )=>{
        setContador(contador-1);
    }
    return(
        <div>
        <Text align='center' color='white' fontSize='3xl'>HOLA CONTADOR</Text>
        <Text align='center' color='white'>{contador}</Text><br></br>
        <Stack align='center'>
        <Button align='center' colorScheme='teal' size='lg' onClick={()=>setContador(contador+1)}/>
        </Stack>
        <Stack align='center'>
        <Button align='center' colorScheme='teal' size='lg' onClick={()=>decrementar(contador-1)}/>
        </Stack>
        </div>
    )
}

export default Contador;