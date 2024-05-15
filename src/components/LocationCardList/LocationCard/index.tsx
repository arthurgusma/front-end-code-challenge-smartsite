import requiredMask from '../../../../public/_material/images/required-mask.png';
import recommendedMask from '../../../../public/_material/images/recommended-mask.png';

import requiredTowel from '../../../../public/_material/images/required-towel.png';
import recommendedTowel from '../../../../public/_material/images/recommended-towel.png';

import partialFountain from '../../../../public/_material/images/partial-fountain.png';
import forbiddenFountain from '../../../../public/_material/images/forbidden-fountain.png';

import requiredLockerrom from '../../../../public/_material/images/required-lockerroom.png';
import partialLockerrom from '../../../../public/_material/images/partial-lockerroom.png';
import forbiddenLockerrom from '../../../../public/_material/images/forbidden-lockerroom.png';

import DOMPurify from "dompurify";

import { Card, CardBody, CardFooter, CardHeader, Center, Divider, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';

import { LocationCardProps } from './types';
import ScheduleDisplay from '../ScheduleDisplay';

export default function LocationCard({ location }: LocationCardProps) {
    const mask = location?.mask === 'required' ? requiredMask : location.mask === 'recommended' ? recommendedMask : null;
    const towel = location?.towel === 'required' ? requiredTowel : location.towel === 'recommended' ? recommendedTowel : null;
    const fountain = location?.fountain === 'not_allowed' ? forbiddenFountain : location.fountain === 'partial' ? partialFountain : null;
    const lockerRoom = location?.locker_room === 'closed' ? forbiddenLockerrom : location?.locker_room === 'partial' ? partialLockerrom  : location.locker_room === 'allowed' ? requiredLockerrom : null;

    const htmlContent = location.content;
    const sanitizedHtmlContent = DOMPurify.sanitize(htmlContent || '');

    return (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(310px, 1fr))' className='px-2 mb-8 card-location'>
            <Card bgColor='BlackAlpha' className='bg-slate-100 h-[30rem]'>
            <CardHeader>
                <Heading size='xs'>{location.opened ? <p className='text-green'>Aberto</p>: <p className='text-red'>Fechado</p>}</Heading>
                <Heading size='md' className='my-4'>{location.title}</Heading>
                <p className='font-gotham-light'>
                    {location?.content && <span dangerouslySetInnerHTML={{__html: sanitizedHtmlContent }} />}
                </p>
            </CardHeader>
            <Center px='4'>
                <Divider borderColor='gray.400' className='w-80'/>
            </Center>
            <CardBody>
                <Flex className='mb-6'>
                {location?.mask && mask && <Image src={mask} alt={`Mask ${location.mask}`}  className='size-16 h-16'/> }
                {location?.towel && towel && <Image src={towel} alt={`Towel ${location.towel}`}  className='size-16 h-16'/> }
                {location?.fountain && fountain && <Image src={fountain} alt={`Fountain ${location.fountain}`}  className='size-16 h-16'/> }
                {location?.locker_room && lockerRoom && <Image src={lockerRoom} alt={`Locker room ${location.locker_room}`}  className='size-16 h-16'/> }
                </Flex>
                <ScheduleDisplay schedules={location.schedules} />
            </CardBody>
            </Card>
        </SimpleGrid>
    );
}