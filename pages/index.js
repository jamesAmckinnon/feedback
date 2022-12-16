import Head from 'next/head'
import Product from '../components/Product'
// import prisma from '../lib/prisma'

export default function Home() {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch('/hello/')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMessage(data.message);
    //             setLoading(false);
    //         })
    // }, [])

    return (
        <div >
            <p> </p>
        </div>
    )
}

// export async function getStaticProps(context) {
//   const data = await prisma.product.findMany({
//     include: {
//       category: true,
//     },
//   })

  // //convert decimal value to string to pass through as json
  // const products = data.map((product) => ({
  //   ...product,
  //   price: product.price.toString(),
  // }))
  // return {
  //   props: { products },
  // }
// }
