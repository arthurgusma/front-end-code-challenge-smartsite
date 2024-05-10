'use client';
import { FormEvent } from 'react';

import iconHour from '../../../public/_material/images/icon-hour.png';

import {
    FormControl,
    FormLabel,
    FormHelperText,
    RadioGroup,
    VStack,
    StackDivider,
    Checkbox,
    Divider, 
    Flex, 
    ButtonGroup,
    Button
  } from '@chakra-ui/react'

import { useSmartFitContext } from '../../ContextAPI/SmartLocationsContext';

import Image from 'next/image';
import RadioForm from './RadioForm';

export default function Form(){
    const { 
        getSmartFitLocations, 
        setFilterRadioValue, 
        setDisplayLocationsClosed, 
        filterRadioValue, 
        displayLocationsClosed, 
        totalLocationsFound 
    } = useSmartFitContext();

    function handleSubmitSearch(ev: FormEvent) {
        ev.preventDefault();
        getSmartFitLocations();
    }

    return (
        <section className='flex justify-center py-8'>
          <div className='w-2/3 border-solid border-4 border-slate-100 p-4'>
            <div className='flex items-center'>
              <Image src={iconHour} alt="clock image" className='size-6 mr-2' />
              <div className='text-sm opacity-60'>Horário</div>
            </div>
            <FormControl onSubmit={handleSubmitSearch}>
              <FormLabel as='legend'><p className='font-gotham-light text-xl mb-[-1rem] ml-4 mt-6'>Qual período quer treinar?</p></FormLabel>
              <RadioGroup onChange={setFilterRadioValue} value={filterRadioValue}>
                <VStack 
                  divider={<StackDivider borderColor='gray.200' />} 
                  spacing={4} 
                  align='stretch'
                  className='opacity-60'
                >
                  <Divider />
                  <RadioForm value='Manhã' textLeft='Manhã' textRight='06:00 às 12:00'/>
                  <RadioForm value='Tarde' textLeft='Tarde' textRight='12:01 às 18:00'/>
                  <RadioForm value='Noite' textLeft='Noite' textRight='18:01 às 23:00'/>
                  <Divider />
                </VStack>
              </RadioGroup>
              <FormHelperText className='flex justify-between'>
                <div className='text-base flex justify-center mt-4'>
                  <Checkbox className='mr-2' onChange={() => setDisplayLocationsClosed(!displayLocationsClosed)} />
                  Exibir unidades fechadas
                </div>
                <div className='text-base flex justify-center mt-4'>Resultados encontrados: <b>{totalLocationsFound}</b></div>
              </FormHelperText>
              <Flex className='justify-center p-4 mt-4'>
                <ButtonGroup gap='8' className='flex justify-center'>
                  <Button 
                    size='md'
                    height='48px'
                    width='360px'
                    border='2px'
                    colorScheme='yellow'
                    borderColor='yellow.400'
                    onClick={handleSubmitSearch}
                  >
                    ENCONTRAR UNIDADE
                  </Button>
                  <Button 
                    height='48px'
                    width='360px'
                    border='2px'
                    borderColor='gray.200'
                    backgroundColor='inherit'
                  >
                    LIMPAR
                  </Button>
                </ButtonGroup>
              </Flex>
            </FormControl>
          </div>
        </section>
      );
}