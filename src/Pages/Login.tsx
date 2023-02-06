import Photo from '../assets/photo.jpg'

function Login() {
    return (
        <div className="h-screen w-screen relative flex justify-center items-center">
            <div className="fixed -z-10 flex justify-start"
                style={{
                    background: 'linear-gradient(66deg, rgba(254,159,77,1) 0%, rgba(250,217,186,1) 99%)',
                    
                    filter: 'blur(2px)',
                    width: '100vw',
                    height: '50%',

                }}>
                    <img src={`${Photo}`} alt="" className='ml- bg-blend-luminosity'></img>
            </div>
            <article
                className='w-96 !important h-56 bg-light-blue rounded-xl p-4'>teste</article>
        </div>
    )
}

export default Login;