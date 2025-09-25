
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useAuth } from '@/hooks/useAuth'
import { useAdmin } from '@/hooks/useAdmin'
import { User, LogOut, FileText, Calendar, Shield, Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import AuthModal from '@/components/AuthModal'

export default function UserMenu() {
  const { user, signOut } = useAuth()
  const { isAdmin } = useAdmin()

  if (!user) {
    return (
      <AuthModal>
        <Button variant="outline" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          Se connecter
        </Button>
      </AuthModal>
    )
  }

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
          <Link to="/dashboard" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Mon espace
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
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
        {isAdmin && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/admin" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Administration
              </Link>
            </DropdownMenuItem>
          </>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut} className="flex items-center gap-2 text-destructive">
          <LogOut className="h-4 w-4" />
          Déconnexion
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
