import { useEffect, useState } from 'react';

export default function useAuth() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => res.json())
            .then((data) => setUser(data))
            .catch(() => setUser(null));
        }
    }, []);

    return user;
}
