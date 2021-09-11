import Provider from 'next-auth'
import Navbar from '../../components/Navbar'

function MyApp({ Component, pageProps }){
    return (
        <Provider>
            <Navbar>
                <Component {...pageProps} />
            </Navbar>
        </Provider>
    )
}

export default MyApp