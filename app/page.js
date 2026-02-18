import { createClient } from "@supabase/supabase-js";

export default async function Home() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const { data: products } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div style={{ padding: 40 }}>
      <h1>Nikhil Telecom Store 🚀</h1>

      {products?.length === 0 && <p>No products yet.</p>}

      <div style={{ display: "grid", gap: 20 }}>
        {products?.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: 20 }}>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
