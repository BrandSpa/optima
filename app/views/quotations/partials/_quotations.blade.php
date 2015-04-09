      <table class="table table-condensed table-striped">
        <tr>
          <th>id</th>
          <th>Empresa</th>
          <th>Contacto</th>
          <th>Creada</th>
          <th>Opciones</th>
        </tr>

        @foreach($quotations as $quotation)
          <tr>
            <td><a href="[[ route('quotations.show', ['quotations' => $quotation->id ]) ]]" class="label label-[[ $quotation->status ]]">[[ $quotation->id ]]</a></td>
            <td><a href="#" class="company-edit" data-company-id="[[$quotation->company->id]]">[[ $quotation->company->name ]]</a></td>
            <td><a href="#" class="contact-edit" data-contact-id="[[$quotation->contact->id]]">[[ $quotation->contact->name ]] [[ $quotation->contact->lastname ]]</a></td>
            <td>
              <span class="timeago" title="[[ $quotation->created_at ]]">
                [[ $quotation->created_at ]]
              </span>
            </td>
            <td>
                <div class="btn-group">
                  <button class="btn btn-primary btn-xs dropdown-toggle" type="button" data-toggle="dropdown">
                  <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu" role="menu">
                  <li>
                    <a href="/quotations/[[ $quotation->id ]]/pdf/[[ Crypt::encrypt($quotation->id) ]]" target="_blank"> PDF </a>
                  </li>
                  <li>
                    <a href="/quotations/[[ $quotation->id ]]/pdfbn" target="_blank" > PDF BN </a>
                  </li>
                  <li>
                    <a href="/quotations/[[ $quotation->id ]]/pdflogos"  target="_blank" > PDF con logos </a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#" class="quotation-duplicate" data-quotation-id="[[ $quotation->id ]]">Duplicar</a>
                  </li>
                  </ul>
                </div>
            </td>
          </tr>
        @endforeach
      </table>