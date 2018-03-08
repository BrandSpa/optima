<table cellspacing="0">
	@foreach($quotation->products as $product)
	<tr>
		<td colspan="3" class="no-border img-product">
			@if($product->name == "Adicional")
			Adicional
			@elseif($product->name == "IT	Service 24/7")
			<img src="[[public_path().'/img/pdf/products/IT Service 247.png']]">

			@else
			<img src="[[public_path().'/img/pdf/products/'.$product->name.'.png']]">
			@endif
			[[ $product->type ]]
		</td>
	</tr>

	@if($product->processor || $product->ram || $product->hdd)
	<tr>
		<td>
			<span class="title">Procesador:</span>
			[[ $product->processor ]]
		</td>
		<td>
			<span class="title">Ram:</span>
			[[ $product->ram ]]
		</td>
		<td class="no-border">
			<span class="title">Disco Duro:</span>
			[[ $product->hdd ]]
		</td>
	</tr>
	@endif

	@if($product->monitor || $product->burner || $product->keyboard)
	<tr>
		<td>
			<span class="title">Monitor:</span>
			[[ $product->monitor ]]
		</td>
		@if($product->keyboard)
		<td>
			<span class="title">Unidad optica:</span>
			[[ $product->burner ]]
		</td>
		<td class="no-border">
			<span class="title">Teclado & mouse:</span>
			[[ $product->keyboard ]]
		</td>
		@else
		<td colspan="2" class="no-border">
			<span class="title">Unidad optica:</span>
			[[ $product->burner ]]
		</td>
		@endif
	</tr>
	@endif

	@if($product->network_card || $product->battery)
	@if($product->battery)
	<tr>
		<td>
			<span class="title">Tarjeta de red:</span>
			[[ $product->network_card ]]
		</td>
		<td colspan="2" class="no-border">
			<span class="title" >Batería:</span>
			[[ $product->battery ]]
		</td>
	</tr>
	@else
	<tr>
		<td colspan="3" class="no-border">
			<span class="title">Tarjeta de red:</span>
			[[ $product->network_card ]]
		</td>
	</tr>
	@endif
	@endif

	@if($product->os || $product->office || $product->antivirus)
	<tr>
		<td>
			<span class="title">SO:</span>
			[[ $product->os ]]
		</td>
		@if($product->antivirus)
		<td>
			<span class="title">Office:</span>
			[[ $product->office ]]
		</td>

		<td class="no-border">
			<span class="title">Antivirus:</span>
			[[ $product->antivirus ]]
		</td>
		@else
		<td colspan="2" class="no-border">
			<span class="title">Office:</span>
			[[ $product->office ]]
		</td>
		@endif
	</tr>
	@endif

	@if($product->additional_1 || $product->additional_2 || $product->additional_3)
	<tr>
		@if($product->additional_1)
		<td colspan="3" class="no-border">
			<span class="title">Adicionales:</span>
			@if($product->additional_1 && $product->additional_2)
			[[ $product->additional_1 ]] /
			[[ $product->additional_2 ]] /
			[[ $product->additional_3 ]]
			@else
			[[ $product->additional_1 ]]
			@endif
		</td>
		@endif
	</tr>
	@endif

	@if($product->additional_4 || $product->additional_5 || $product->additional_6)
	<tr>
		<td colspan="3" class="no-border">
			<span class="title">Adicionales:</span>
			@if($product->additional_4 && $product->additional_5)
			[[ $product->additional_4 ]] /
			[[ $product->additional_5 ]] /
			[[ $product->additional_6 ]]
			@else
			[[ $product->additional_4 ]]
			@endif
		</td>
	</tr>
	@endif

	<tr>
		<td colspan="2" class="no-border"><span class="title">Tiempo:</span></td>
		<td class="no-border text-right" >

			@if($product->period == "15 días")

			@else
			[[ $product->lapse ]]
			@endif

			@if($product->lapse == 1 && $product->period == "Semana")
			[[ " a 7 días" ]]
			@else
				@if($product->lapse  > 1)
					@if($product->period == "Mes")
						[["Meses"]]
					@else
						[[str_finish($product->period, 's')]]
					@endif
				@else
					[[ $product->period ]]
				@endif
			@endif
		</td>
	</tr>

	<tr>
		<td  colspan="2" class="no-border">
			<span class="title">Cantidad:</span>
		</td>
		<td class=" no-border text-right">

			[[ $product->quantity ]]
		</td>
	</tr>

	<tr>
		<td colspan="2" class="no-border">
			<span class="title">Precio unitario por
				@if($product->lapse == 1 && $product->period == "Semana")
				[[ "1 a 7 días" ]]
				@else
				[[ $product->period ]]:
				@endif
			</span>
		</td>
		<td class="no-border text-right">
			<span class="price">[[ "$ ".priceFormat($product->price) ]]</span> @if($product->iva) +IVA @endif
		</td>
	</tr>

	@if($product->show)
	<tr>
		<td colspan="2" class="no-border">
			<span class="title">Total:</span>
		</td>
		<td class="no-border text-right">[[ "$ ".priceFormat($product->total) ]] @if($product->iva) +IVA @endif</td>
	</tr>
	@endif

	@if($product->note )
	<tr>
		<td colspan="3" class="no-border">
			<span class="title">Nota:</span>
			[[ $product->note ]]
		</td>
	</tr>
	@endif
	<tr class="spaces">
		<td colspan="4" class="no-border spaces">
			@for($i=0; $i <= $product->spaces; $i++)
			<br>
			@endfor
		</td>
	</tr>
	@endforeach

</table>