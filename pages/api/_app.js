import Provider from 'next-auth'

function MyApp({ Component, pageProps }){
    return (
        <Provider>
            
                <Component {...pageProps} />
          
        </Provider>
    )
}

export default MyApp