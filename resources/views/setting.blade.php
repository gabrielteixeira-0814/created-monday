@extends('layouts.layout')

<div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-10 mt-5" id="successEditToken">
      <div class="alert alert-success text-center" role="alert">
        Token atualizado com sucesso!
      </div>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-10 mt-5" id="errorEditToken">
      <div class="msgError"></div>
    </div>
  </div>
  <div class="h2 pt-5" style="font-weight: bold; color: #0099B2">Configurações</div>

    <div class="row bg-white rounded p-3">
      
        {{-- Insere a formulario --}}
        <div class="setting_data"></div>
    </div>
</div>


@section('script')
  <script src="{{ asset('js/app.js') }}" defer></script>
  <script src="{{ asset('js/setting.js') }}" defer></script>
@endsection