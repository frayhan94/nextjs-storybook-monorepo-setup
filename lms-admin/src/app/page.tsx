"use client";
import {Button} from 'ui-insead';
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button
          onClick={() => alert('Hello World!')}
          primary
          label={'mas john rayon bakrie'}
          backgroundColor={'#f00'}
          size={'large'}
      />
    </div>
  );
}
