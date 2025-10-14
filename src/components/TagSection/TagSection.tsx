import { useCoffeeContext } from '@/context/CoffeeContext'
import { redirect, usePathname } from 'next/navigation';
import { useEffect } from 'react';

const TagSection = ({ data, isCentered }: { data: string[], isCentered?: boolean }) => {

  const { tagArray, setTagArray } = useCoffeeContext();
  const pathname = usePathname();
  const isPlace = pathname.includes('places')

  const selectTags = (chosenTag: string) => {
    if (tagArray.includes(chosenTag)) {
      setTagArray(prev => prev.filter(tag => tag !== chosenTag))
    } else {
      setTagArray(oldArr => [...oldArr, chosenTag])
    }

    if (isPlace) redirect('/')
  }

  useEffect(() => {
    if (isPlace) setTagArray([])
  }, [isPlace, setTagArray])

  return (<div className={`flex flex-wrap ${isCentered && 'justify-center'}`}>
    {data.sort().map((tag, index) => (
      <div
        className={`rounded-lg p-2 mr-2 mb-2 text-black capitalize cursor-pointer ${tagArray.includes(tag) && !isPlace ? 'bg-red-500' : 'bg-white'}`}
        key={index}
        onClick={() => selectTags(tag)}>
        {tag}
      </div>
    ))}
  </div>)
}

export default TagSection