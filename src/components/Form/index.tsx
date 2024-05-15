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

    function handleClearSearch() {
        setFilterRadioValue('');
        setDisplayLocationsClosed(false);
    }

    return (
        <section className='py-8'>
          <div className='border-solid border-4 border-slate-100 p-4'>
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
              <FormHelperText className='grid sm:flex justify-between m-0 sm:m-auto'>
                <div className='text-base flex justify-center mt-4'>
                  <Checkbox className='mr-2' name='checkbox-option' isChecked={displayLocationsClosed} onChange={() => setDisplayLocationsClosed(!displayLocationsClosed)} />
                  Exibir unidades fechadas
                </div>
                <div className='text-base flex justify-center mt-4'>Resultados encontrados: <b className='ml-1'>{totalLocationsFound}</b></div>
              </FormHelperText>
              <div className='grid sm:flex justify-center sm:justify-between p-4 mt-4 font-gotham-bold'>
                  <Button 
                    size='md'
                    height='48px'
                    w={[300]}
                    border='2px'
                    colorScheme='yellow'
                    borderColor='yellow.400'
                    onClick={handleSubmitSearch}
                    className='my-4 sm:m-0'
                    type='submit'
                  >
                    ENCONTRAR UNIDADE
                  </Button>
                  <Button 
                    height='48px'
                    w={[300]}
                    border='2px'
                    borderColor='gray.200'
                    backgroundColor='inherit'
                    onClick={handleClearSearch}
                  >
                    LIMPAR
                  </Button>
              </div>
            </FormControl>
          </div>
        </section>
      );
}