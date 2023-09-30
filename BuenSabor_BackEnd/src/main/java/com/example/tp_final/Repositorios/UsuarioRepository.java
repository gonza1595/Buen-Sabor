package com.example.tp_final.Repositorios;

import com.example.tp_final.Entidades.UnidadMedida;
import com.example.tp_final.Entidades.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario,Long> {
}
