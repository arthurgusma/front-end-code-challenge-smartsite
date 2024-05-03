import DescriptionItem from './DescriptionItem';

import { mask, towel, fountain, lockerroom } from './constDescriptions';

export default function DescripitionList() {
    return (
        <section className='flex justify-center'>
            <div className='flex bg-slate-100 w-2/3 space-x-8 p-4'>
                <DescriptionItem title='Máscara' itens={mask} />
                <DescriptionItem title='Toalha' itens={towel} />
                <DescriptionItem title='Bebedouro' itens={fountain} />
                <DescriptionItem title='Vestiários' itens={lockerroom} />
            </div>
         </section>
         );
}