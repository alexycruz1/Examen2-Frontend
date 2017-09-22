<template>
	<div id = "Bombs">
	<br><br>
		<div class = "ui center aligned grid">
			<div class = "one wide column"></div>
			<div class = "fourteen wide column">
				<div class = "ui big message">
					Mis eventos
					<div class = "ui right floated icon buttons">
						<button class = "ui blue button">
							<i class = "plus icon"></i>	
						</button>	
					</div>
				</div>

				<div class = "ui four cards">
					<div class = "ui fluid card">
						<div class = "image">
							<img id = "eventImage2">
						</div>
						<div class = "content">
							<div class = "header"></div>
								<div class = "meta">
									<a></a>
								</div>
							</div>
							<div class="extra content">
      							<div class="ui two buttons">
        							<div class="ui basic green button">Modificar</div>
        							<div class="ui basic red button">Eliminar</div>
      							</div>	  
    						</div>
					</div>
				</div>
			</div>
			<div class = "one wide column"></div>
		</div>

		<div class = "ui modal" id = "createEvent">
			<i class = "close icon"></i>
			<div class = "header">
				Creacion de Eventos
			</div>
			<div class = "ui center aligned grid">
				<div class = "seven wide column">
					<div class = "ui medium image">
						<img id="eventImage" src = "img/imageNo.jpg">
					</div>
				</div>
				<div class = "seven wide column">
				<br><br><br>
					<div class = "ui form">
						<div class = "field">
							<label>Nombre: </label>
							<input type="text" placeholder= "nombre" v-model = "name">
						</div>
						<div class = "field">
							<label>Estado: </label>
							<input type="text" placeholder= "estado" v-model  = "status">
						</div>
						<div class = "field">
							<label>descripcion: </label>
							<input type="text" placeholder= "Descripcion" v-model  = "description">
						</div>
						<div class = "field">
							<label>Fecha: </label>
							<input type="text" placeholder= "Fecha" v-model  = "dateAndTime">
						</div>
					</div>
				</div>
			</div>
			<div class = "actions">
				<div class="ui black deny button">
      				Cancelar
    			</div>
    			<div class="ui positive right labeled icon button">
      				Crear
      				<i class="checkmark icon"></i>
    			</div>
			</div>
		</div>

		


		<div class = "ui modal" id = "modifyEvent">
			<i class = "close icon"></i>
			<div class = "header">
				Modificacion de Eventos
			</div>
			<div class = "ui center aligned grid">
				<div class = "seven wide column">
					<div class = "ui medium image">
						<img v-bind:src="event.image">
					</div>
				</div>
				<div class = "seven wide column">
				<br><br><br>
					<div class = "ui form">
						<div class = "field">
							<label>Nombre: </label>
							<input type="text" v-bind:value = "name" v-model = "event.name">
						</div>
						<div class = "field">
							<label>Estado: </label>
							<input type="text" v-bind:value= "status" v-model  = "event.status">
						</div>
						<div class = "field">
							<label>descripcion: </label>
							<input type="text" v-bind:value= "description" v-model  = "event.description">
						</div>
						<div class = "field">
							<label>Fecha: </label>
							<input type="text" v-bind:value= "dateAndTime" v-model  = "event.dateAndTime">
						</div>
					</div>
				</div>
			</div>
			<div class = "actions">
				<div class="ui black deny button">
      				Cancelar
    			</div>
    			<div class="ui positive right labeled icon button">
      				Modificar
      				<i class="checkmark icon"></i>
    			</div>
			</div>
		</div>

		<div class = "ui mini modal" id = "quitEvent">
			<i class = "close icon"></i>
			<div class = "header">¿Desea Eliminar?</div>
			<div class = "extra content">
				<div class="actions">
    				<div class="ui black deny button">
      					Cancelar
    				</div>
    				<div class="ui red right labeled icon button">
      					Eliminar
      					<i class="checkmark icon"></i>
    				</div>
 		 		</div>
			</div>
		</div>
		<br><br><br>	
	</div>
</template>

<script>
	import personService from './../services/personServices'
	var input = 'nada';


	export default{
		name: 'events', 
		data(){
			return {
			}
		}, 
	}
</script>

<style scoped>
	
</style>