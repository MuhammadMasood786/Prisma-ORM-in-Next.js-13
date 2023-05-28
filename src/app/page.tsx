import Image from 'next/image'
import {prisma} from '@/lib/prisma'
export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 20,
        }}
      >
        {users.map((user:any) => (
          <div
            key={user.id}
            style={{ border: "1px solid #ccc", textAlign: "center" }}
          >
            <img
              src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
              alt={user.name}
              style={{ height: 180, width: 180 }}
            />
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
      
    </main>
  )
}
