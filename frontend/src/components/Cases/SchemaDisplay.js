import CopyToClipboard from "../CopyToClipboard";

const SchemaDisplay = ({ schema, id }) => {
  return (
    <div className="card mb-3 mw-100">
      <div className="row">
        <div className="col-8 pe-0">
          <div className="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
            <small className="font-monospace text-body-secondary text-uppercase">
              Schema
            </small>
            <div className="d-flex ms-auto">
              <CopyToClipboard
                id={`schema${id}`}
                textToCopy={JSON.stringify(schema, null, 2)}
              />
            </div>
          </div>
          <div className="card-body">
            <pre id="schema-code">{JSON.stringify(schema, null, 2)}</pre>
          </div>
        </div>
        <div className="col-4 border-start ps-0">
          <div className="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
            <small className="font-monospace text-body-secondary text-uppercase">
              Instance
            </small>
            <div className="d-flex ms-auto">
              <CopyToClipboard
                id={`instance${id}`}
                textToCopy={JSON.stringify("instance", null, 2)}
              />
            </div>
          </div>
          <div id="instance-info" className="card-body"></div>
        </div>
      </div>
    </div>
  );
};

export default SchemaDisplay;
