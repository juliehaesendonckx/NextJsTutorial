import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className='jumbotron jumbotron-fluid'>
      </div>

      <div className='row mx-auto'>
        <div className='col-3'>
          <div className='card' style={{ width: '18rem' }}>
            <Image className='card-img-top mt-2'
              src="/img/Pikachu.jpg"
              width={150}
              height={150}
              alt="Grass Energy"
            />
            <div className='card-body'>
              <h5 className='card-title'>Pokémon</h5>
              <p className='card-text'>Scroll through all the pokémon in the Kanto region Pokédex.</p>
              <Link href="/pokemon" className='btn btn-success'>Go Somewhere</Link>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='card' style={{ width: '18rem' }}>
            <Image className='card-img-top mt-2'
              src="/img/AshBadge.png"
              width={150}
              height={150}
              alt="Ash holding a badge."
            />
            <div className='card-body'>
              <h5 className='card-title'>Badges</h5>
              <p className='card-text'>Overview of all the Kanto-region badges grouped per gym. See which gym leader must be defeated to win each badge.</p>
              <Link href="/badges" className='btn btn-success'>Go Somewhere</Link>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='card' style={{ width: '18rem' }}>
            <Image className='card-img-top mt-2'
              src="/img/fire.png"
              width={150}
              height={150}
              alt="Fire Energy"
            />
            <div className='card-body'>
              <h5 className='card-title'>Energy Types</h5>
              <p className='card-text'>The type of a pokémon determines its strenghts and weaknesses.</p>
              <Link href="/energy" className='btn btn-success'>Go Somewhere</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
