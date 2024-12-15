import Form from 'next/form';
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import { Button } from './ui/button';

const SearchBar = () => {
  return (
    <div>
      <Form action='/search' className='relative'>
        <Input
          name='q'
          placeholder='Search for events...'
          className='w-full pl-12 text-sm py-5'
        />
        <Search className='absolute left-4 top-1/2 text-gray-400 -translate-y-1/2 size-5' />
        <Button
          type='submit'
          size='sm'
          className='absolute right-2 top-1/2 -translate-y-1/2'
        >
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchBar;
