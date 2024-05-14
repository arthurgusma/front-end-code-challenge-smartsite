import DescriptionItem from './DescriptionItem';

import { mask, towel, fountain, lockerroom } from './constDescriptions';

export default function DescripitionList() {
    return (
        <section className='py-8 flex'>
            <div className='flex-1 lg:flex bg-slate-100 justify-between p-4'>
                <DescriptionItem title='Máscara' itens={mask} />
                <DescriptionItem title='Toalha' itens={towel} />
                <DescriptionItem title='Bebedouro' itens={fountain} />
                <DescriptionItem title='Vestiários' itens={lockerroom} />
            </div>
         </section>
         );
}