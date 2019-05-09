<?php
class entidadClase
{
    
    /* #region  Atributos */
    
    public $id;
    public $campo1;
    public $campo2;
    public $campo3;
    public $estado;
    
    /* #endregion */
    
    /* #region  _BorrarUno */
    
    public function _BorrarUno()
    {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
        $consulta         = $objetoAccesoDato->RetornarConsulta("
                delete 
                from tabla                 
                WHERE id=:id");
        $consulta->bindValue(':id', $this->id, PDO::PARAM_INT);
        $consulta->execute();
        return $consulta->rowCount();
    }
    
    /* #endregion */
    
    /* #region  Modificar */
    
    public function Modificar()
    {
        
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
        $consulta         = $objetoAccesoDato->RetornarConsulta("
                update tabla 
                set campo1='$this->campo1',
                campo2='$this->campo2',
                campo3='$this->campo3'
                WHERE id='$this->id'");
        return $consulta->execute();
        
    }
    
    
    /* #endregion */
    
    /* #region  InsertarUno */
    
    public function InsertarUno()
    {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
        $consulta         = $objetoAccesoDato->RetornarConsulta("INSERT into tabla (campo1,campo2,campo3,estado)values('$this->campo1','$this->campo2','$this->campo3','$this->estado')");
        $consulta->execute();
        return $objetoAccesoDato->RetornarUltimoIdInsertado();
    }
    
    /* #endregion */
    
    /* #region  ModificarConParametros */
    public function ModificarConParametros()
    {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
        $consulta         = $objetoAccesoDato->RetornarConsulta("
                update tabla 
                set campo1=:campo1,
                campo2=:campo2,
                campo3=:campo3,
                estado=:estado
                WHERE id=:id");
        $consulta->bindValue(':id', $this->id, PDO::PARAM_INT);
        $consulta->bindValue(':campo1', $this->campo1, PDO::PARAM_INT);
        $consulta->bindValue(':campo3', $this->campo3, PDO::PARAM_STR);
        $consulta->bindValue(':campo2', $this->campo2, PDO::PARAM_STR);
        $consulta->bindValue(':estado', $this->estado, PDO::PARAM_STR);
        return $consulta->execute();
    }
    /* #endregion */
    
    /* #region  InsertarConParametros */
    
    public function InsertarConParametros()
    {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
        $consulta         = $objetoAccesoDato->RetornarConsulta("INSERT into tabla (campo1,campo2,campo3,estado)values(:campo1,:campo2,:campo3,:estado)");
        $consulta->bindValue(':campo1', $this->campo1, PDO::PARAM_INT);
        $consulta->bindValue(':campo3', $this->campo3, PDO::PARAM_STR);
        $consulta->bindValue(':campo2', $this->campo2, PDO::PARAM_STR);
        $consulta->bindValue(':estado', $this->estado, PDO::PARAM_STR);
        $consulta->execute();
        return $objetoAccesoDato->RetornarUltimoIdInsertado();
    }
    
    
    /* #endregion */
    
    /* #region  Guardar */
    
    public function Guardar()
    {
        
        if ($this->id > 0) {
            $this->ModificarConParametros();
        } else {
            $this->InsertarConParametros();
        }
        
    }
    
    /* #endregion */
    
    /* #region  _TraerTodos */
    
    public static function _TraerTodos()
    {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
        $consulta         = $objetoAccesoDato->RetornarConsulta("select id,campo1 as campo1, campo2 as campo2,campo3 as campo3, estado as estado from tabla");
        $consulta->execute();
        return $consulta->fetchAll(PDO::FETCH_CLASS, "entidadClase");
    }
    
    
    /* #endregion */
    
    /* #region  _TraerUno */
    
    public static function _TraerUno($id)
    {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
        $consulta         = $objetoAccesoDato->RetornarConsulta("select id, campo1 as campo1, campo2 as campo2,campo3 as campo3, estado as estado from tabla where id = $id");
        $consulta->execute();
        $cdBuscado = $consulta->fetchObject('entidadClase');
        return $cdBuscado;
        
        
    }
    /* #endregion */
    
    /* #region  TraerPorCampo3 */
    
    public static function TraerPorCampo3($id, $campo3)
    {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
        $consulta         = $objetoAccesoDato->RetornarConsulta("select  campo1 as campo1, campo2 as campo2,campo3 as campo3, estado as estado from tabla  WHERE id=? AND campo3=?");
        $consulta->execute(array(
            $id,
            $campo3
        ));
        $cdBuscado = $consulta->fetchObject('entidadClase');
        return $cdBuscado;
        
        
    }
    
    
    /* #endregion */
    
    /* #region  TraerPorCampo3ConParametros */
    
    public static function TraerPorCampo3ConParametros($id, $campo3)
    {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
        $consulta         = $objetoAccesoDato->RetornarConsulta("select  campo1 as campo1, campo2 as campo2,campo3 as campo3 from tabla  WHERE id=:id AND campo3=:campo3");
        $consulta->bindValue(':id', $id, PDO::PARAM_INT);
        $consulta->bindValue(':campo3', $campo3, PDO::PARAM_STR);
        $consulta->execute();
        $cdBuscado = $consulta->fetchObject('entidadClase');
        return $cdBuscado;
        
        
    }
    
    /* #endregion */
    
    /* #region  TraerPorCampo3Array */
    public static function TraerUnCdcampo3ParamNombreArray($id, $campo3)
    {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
        $consulta         = $objetoAccesoDato->RetornarConsulta("select  campo1 as campo1, campo2 as campo2,campo3 as campo3 from tabla  WHERE id=:id AND campo3=:campo3");
        $consulta->execute(array(
            ':id' => $id,
            ':campo3' => $campo3
        ));
        $consulta->execute();
        $cdBuscado = $consulta->fetchObject('entidadClase');
        return $cdBuscado;
    }
    /* #endregion */
    
    public function mostrarDatos()
    {
        return "Metodo mostar:" . $this->campo1 . "  " . $this->campo2 . "  " . $this->campo3;
    }
    
}