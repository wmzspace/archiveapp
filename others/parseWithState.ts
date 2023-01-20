export type NFTMetaData = {
    name: string
    description: string
    imageURL: string
}

const [metaData, setMetaData] = useState<NFTMetaData>()

export const fetchMetaData = async () => {
        const metaDataResponse = await fetch(convertIpfsToHttps(nft.tokenURI))
        if (metaDataResponse.status != 200) return
        const json = await metaDataResponse.json()
        setMetaData({
            name: json.name,
            description: json.description,
            imageURL: convertIpfsToHttps(json.image),
        }) // 这个用来改变metadata的state
           // 就这样调用
           // <img src={metaData?.imageURL} alt="image asset"/>
           // <p>{metaData?.description}</p>
    }


export const convertIpfsToHttps = (url: string) => {
    if (!url.startsWith("ipfs://")) {
        throw new Error("invalid ipfs url")
    }
    const cid = url.substring(7)
    return `https://ipfs.io/ipfs/${cid}`
}

