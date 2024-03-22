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
              src="/img/grass.png"
              width={150}
              height={150}
              alt="Grass Energy"
            />
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link href="#" className='btn btn-success'>Go Somewhere</Link>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='card' style={{ width: '18rem' }}>
            <Image className='card-img-top mt-2'
              src="/img/electric.png"
              width={150}
              height={150}
              alt="Electric Energy"
            />
            <div className='card-body'>
              <h5 className='card-title'>Pokémons</h5>
              <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link href="/pokemon" className='btn btn-success'>Go Somewhere</Link>
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
              <h5 className='card-title'>Gyms</h5>
              <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link href="#" className='btn btn-success'>Go Somewhere</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
