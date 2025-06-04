
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useAuth } from '@/hooks/useAuth'
import { User, LogOut, FileText, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function UserMenu() {
  const { user, signOut } = useAuth()

  if (!user) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          {user.email}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem asChild>
          <Link to="/create-cv" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Créer un CV
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/booking" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Réserver
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut} className="flex items-center gap-2 text-red-600">
          <LogOut className="h-4 w-4" />
          Déconnexion
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
