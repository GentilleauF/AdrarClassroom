import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://iobfelssovptsmzhrmrt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvYmZlbHNzb3ZwdHNtemhybXJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1OTIyMTMsImV4cCI6MjAyMTE2ODIxM30.taBEvjgfneZbk-y8mDLK5Xuka5mbp7H-paOEhCsKpNY')