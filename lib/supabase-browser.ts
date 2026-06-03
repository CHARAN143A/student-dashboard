'use client'

import { createClient } from '@supabase/supabase-js'

let client: ReturnType<typeof createClient> | null = null

export function createSupabaseBrowserClient() {
  if (client) return client

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!

  client = createClient(supabaseUrl, supabaseKey)
  return client
}
