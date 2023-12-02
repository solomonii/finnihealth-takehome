import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { auth } from "./firebase/firebase"
import { onAuthStateChanged } from "firebase/auth"

export default function getUser() {
    const [user, setUser] = useState()
    const router = useRouter()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            setUser(authUser)
        })

        return () => unsubscribe()
    }, [])

    useEffect(() => {
        onAuthStateChanged(auth, (authUser) => {
            if (user === undefined) return
            if (user?.email !== authUser?.email) {
                router.refresh()
            }
        })
    }, [user])

    return user
}