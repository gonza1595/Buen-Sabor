package com.example.tp_final.Repositorios;

import com.example.tp_final.Entidades.ArticuloInsumo;
import com.example.tp_final.Entidades.DetalleArtManufacturado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DatalleArtManufacturadoRepository extends JpaRepository<DetalleArtManufacturado,Long> {
}