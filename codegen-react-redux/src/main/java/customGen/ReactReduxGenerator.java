package customGen;

import io.swagger.codegen.CliOption;
import io.swagger.codegen.CodegenConfig;
import io.swagger.codegen.CodegenConstants;
import io.swagger.codegen.CodegenModel;
import io.swagger.codegen.CodegenParameter;
import io.swagger.codegen.CodegenType;
import io.swagger.codegen.DefaultCodegen;
import io.swagger.codegen.SupportingFile;

import com.google.common.base.CaseFormat;
import com.google.common.base.Predicate;
import com.google.common.collect.ImmutableMap;
import com.samskivert.mustache.Mustache;
import com.samskivert.mustache.Template;
import com.samskivert.mustache.Template.Fragment;

import org.apache.commons.lang3.StringUtils;

import io.swagger.codegen.CodegenConfig;
import io.swagger.codegen.languages.CSharpClientCodegen;
import io.swagger.codegen.languages.ScalaClientCodegen;
import io.swagger.models.Model;
import io.swagger.models.Swagger;
import io.swagger.models.properties.Property;

import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Map.Entry;
import java.io.IOException;
import java.io.Writer;

public class ReactReduxGenerator extends DefaultCodegen implements CodegenConfig {
    protected String invokerPackage = "io.swagger.client";
    protected String groupId = "io.swagger";
    protected String artifactId = "swagger-client";
    protected String artifactVersion = "1.0.0";
    protected String sourceFolder = "";
    protected ArrayList<String> models = new ArrayList<>();
    protected ArrayList<String> containers = new ArrayList<>();
    protected final ArrayList<String> distinct = new ArrayList<>();

    public ReactReduxGenerator() {
        super();

        // clear import mapping (from default generator) as this generator does not use it
        // at the moment
        embeddedTemplateDir = templateDir = "react-redux";
        importMapping.clear();

        modelTemplateFiles.put("core.model.{{model}}.mustache", ".js");
        apiTemplateFiles.put("core.api.{{operation}}.mustache", ".js");
        apiTemplateFiles.put("core.service.{{operation}}.mustache", "Service.js");
        apiTemplateFiles.put("store.actions.{{operation}}.index.mustache", ".js");
        apiTemplateFiles.put("store.actions.{{operation}}.types.mustache", ".js");
        apiTemplateFiles.put("store.reducers.{{operation}}.index.mustache", ".js");
        supportingFiles.add(new SupportingFile("support.action.helpers.mustache",this.apiFileFolder() + "\\store\\actions", "helpers.js"));
        supportingFiles.add(new SupportingFile("support.reducer.mustache",this.apiFileFolder() + "\\store\\reducers", "index.js"));
        supportingFiles.add(new SupportingFile("support.store.mustache",this.apiFileFolder() + "\\store", "store.js"));

       

        typeMapping.remove("array");
        typeMapping.remove("list");
        containers.add("List");
        containers.add("IList");
        containers.add("IEnumerable");

    }

    @Override
    public void processOpts() {
        super.processOpts();
        additionalProperties.put("methodname", new Mustache.Lambda() {
            @Override
            public void execute(Template.Fragment fragment, Writer writer) throws IOException {
                try {
                    String[] parts = fragment.execute().split("@");
                    if(parts.length < 4){
                        return;
                    }
                    String operation = parts[0];
                    String pathMethod = parts[1];
                    String controller = parts[2];
                    String methodHttp = parts[3];
                    ArrayList<String> paths = new ArrayList<>(Arrays.asList(pathMethod.substring(1).split("/")));
                    paths.removeIf(new java.util.function.Predicate<String>() {
                        @Override
                        public boolean test(String t) {
                            return t.contains("{");
                        }
                    });
                    if(paths.size() > 0){
                        paths.remove(paths.size()-1);
                    }
    
                    for (String path : paths) {
                        if(operation.toLowerCase().startsWith(path.toLowerCase())){
                            int index = path.length();
                            operation = operation.substring(index,operation.length());
                        }
                    }
                    writer.write(CaseFormat.UPPER_CAMEL.to(CaseFormat.LOWER_CAMEL, operation));
                } catch (Exception e) {
                    
                }
            }
        });        
        additionalProperties.put("titlecase", new Mustache.Lambda() {
            @Override
            public void execute(Template.Fragment fragment, Writer writer) throws IOException {
                String text = fragment.execute();
                writer.write(StringUtils.capitalize(text));
            }
        });
        additionalProperties.put("camelcase", new Mustache.Lambda() {
            @Override
            public void execute(Template.Fragment fragment, Writer writer) throws IOException {
                String text = fragment.execute();
                writer.write(CaseFormat.UPPER_CAMEL.to(CaseFormat.LOWER_CAMEL, text)); 
            }
        });        
        additionalProperties.put("uppercase", new Mustache.Lambda() {
            @Override
            public void execute(Template.Fragment fragment, Writer writer) throws IOException {
                String text = fragment.execute();
                writer.write(text.toUpperCase());
            }
        });
        additionalProperties.put("lowercase", new Mustache.Lambda() {
            @Override
            public void execute(Template.Fragment fragment, Writer writer) throws IOException {
                String text = fragment.execute();
                writer.write(text.toLowerCase());
            }
        });
        additionalProperties.put("snakecase", new Mustache.Lambda() {
            @Override
            public void execute(Template.Fragment fragment, Writer writer) throws IOException {
                String text = fragment.execute();
                writer.write(CaseFormat.UPPER_CAMEL.to(CaseFormat.UPPER_UNDERSCORE, text)); 
            }
        });
        additionalProperties.put("basetype", new Mustache.Lambda() {
            @Override
            public void execute(Template.Fragment fragment, Writer writer) throws IOException {
                String text = fragment.execute();
                String basetype = getBaseTypeOnly(text);
                writer.write(basetype); 
                LOGGER.info("basetype" + " " + text + " " + basetype );
            }
        });
        additionalProperties.put("subtype", new Mustache.Lambda() {
            @Override
            public void execute(Template.Fragment fragment, Writer writer) throws IOException {
                String text = fragment.execute();
                String subType = getSubType(text);
                writer.write(subType); 
                LOGGER.info("subtype" + " " + text + " " + subType );
            }
        });


        final Map<String,Predicate<String>> predicates = new HashMap<String,Predicate<String>>();
        predicates.put("Post", getPredicateEquals("Post") );
        predicates.put("Get", getPredicateEquals("Get") );
        predicates.put("Delete", getPredicateEquals("Delete") );
        predicates.put("Put", getPredicateEquals("Put") );
        predicates.put("List", getPredicateEquals("List") );
        predicates.put("RetornoApiObj", getPredicateEqualsStartAndEnd("RetornoApi[","]") );
        predicates.put("RetornoApiArray", getPredicateEqualsStartAndEnd("RetornoApi[","]]") );
        predicates.put("Array", getPredicateEqualsStartOrEnd("Array","[]") );
        predicates.put("SubTypeArray", getPredicateIsSubTypeArray() );
        predicates.put("SubTypeModel", getPredicateIsSubTypeModel() );
        predicates.put("SubTypePrimitive", getPredicateIsSubTypePrimitive() );
        predicates.put("SubTypeArrayModel", getPredicateIsSubTypeArrayModel() );
        predicates.put("SubTypeArrayPrimitive", getPredicateIsSubTypeArrayPrimitive() );

        for (final String key : predicates.keySet()) {
            final Predicate<String> predicate = predicates.get(key);
            final String lambdaKey  = "is" + key;
            additionalProperties.put(lambdaKey, new Mustache.InvertibleLambda(){
            
                @Override
                public void execute(Fragment frag, Writer out) throws IOException {
                    String context = frag.context().toString();
                    boolean result = predicate.apply(context);
                    LOGGER.info(lambdaKey + " " + context + " " + String.valueOf(result) );
                    out.write( result ? frag.execute() : ""); 
                }
            
                @Override
                public void executeInverse(Fragment frag, Writer out) throws IOException {
                    String context = frag.context().toString();
                    boolean result = !predicate.apply(context);
                    LOGGER.info(lambdaKey + " " + context + " " + String.valueOf(result) );
                    out.write( result ? frag.execute() : "");
                }
            });
        }

        additionalProperties.put("distinct", new Mustache.Lambda(){
            @Override
            public void execute(Fragment frag, Writer out) throws IOException {
                String value = frag.execute();
                if(!distinct.contains(value)){
                    out.write(value);
                    distinct.add(value);
                    LOGGER.info("distinct:"  + value + " nao existe" + String.valueOf(distinct.size()));
                }else{
                    LOGGER.info("distinct:"  + value + " existe");
                }
            }
        });

        additionalProperties.put("distinctClear", new Mustache.Lambda(){
            @Override
            public void execute(Fragment frag, Writer out) throws IOException {
                distinct.clear();
            }
        });
    }

    public String getBaseTypeOnly(String type){
        if(type.indexOf("[") > 0){
            type = type.substring(0,type.indexOf("["));
        }
        return type;
    }

    public String getSubType(String type){
        if(type.contains("[") && type.contains("]")){
            type = type.substring(type.indexOf("[") + 1,type.lastIndexOf("]"));
        }
        return type;
    }

    private Predicate<String> getPredicateEquals(final String sentence){
        return new Predicate<String>() {
			@Override
			public boolean apply(String input) {
				return input.toUpperCase().equals(sentence.toUpperCase());
			}
        };
    }

    private Predicate<String> getPredicateIsSubTypePrimitive(){
        return new Predicate<String>() {
			@Override
			public boolean apply(String input) {
                String value = getSubType(input);
				return typeMapping.containsKey(value) || typeMapping.containsValue(value);
			}
        };
    }
    

    private Predicate<String> getPredicateIsSubTypeArray(){
        return new Predicate<String>() {
			@Override
			public boolean apply(String input) {
                String value = getSubType(input);
				return containers.contains(value) ;
			}
        };
    }


    private Predicate<String> getPredicateIsSubTypeModel(){
        return new Predicate<String>() {
			@Override
			public boolean apply(String input) {
                String value = getSubType(input);
				return models.contains(value) ;
			}
        };
    }

    private Predicate<String> getPredicateIsSubTypeArrayModel(){
        return new Predicate<String>() {
			@Override
			public boolean apply(String input) {
                String value = getSubType(getSubType(input));
				return models.contains(value) ;
			}
        };
    }

    private Predicate<String> getPredicateIsSubTypeArrayPrimitive(){
        return new Predicate<String>() {
			@Override
			public boolean apply(String input) {
                String value = getSubType(getSubType(input));
				return typeMapping.containsKey(value) || typeMapping.containsValue(value);
			}
        };
    }

    private Predicate<String> getPredicateEqualsStartOrEnd(final String start,final String end){
        return new Predicate<String>() {
			@Override
			public boolean apply(String input) {
				return input.startsWith(start) || input.endsWith(end);
			}
        };
    }

    private Predicate<String> getPredicateEqualsStartAndEnd(final String start,final String end){
        return new Predicate<String>() {
			@Override
			public boolean apply(String input) {
				return input.startsWith(start) && input.endsWith(end);
			}
        };
    }



    @Override
    public Map<String, Object> postProcessAllModels(Map<String, Object> objs) {
        Map<String, Object> map = super.postProcessAllModels(objs);
        for ( String model : map.keySet()) {
            if(!models.contains(model)){
                models.add(getBaseTypeOnly(model));
                LOGGER.info("postProcessAllModels " + getBaseTypeOnly(model) );
            }
        }
        return map;
    }

    @Override
    public CodegenType getTag() {
        return CodegenType.CLIENT;
    }

    @Override
    public String getName() {
      return "react-redux";
    }

    @Override
    public String getHelp() {
        return "Generates a client react-redux.";
    }



    @Override
    public String apiFileFolder() {
        return outputFolder + File.separator + sourceFolder;
    }

    @Override
    public String modelFileFolder() {
        return outputFolder + File.separator + sourceFolder + File.separator + "core" + File.separator + "model";
    }


    @Override
    public String toModelDocFilename(String name) {
        return toModelFilename(name);
    }

    @Override
    public String toModelImport(String name) {
        LOGGER.info("toModelImport:" + name);
        if ("".equals(modelPackage())) {
            return  getBaseTypeOnly(name);
        } else {
            return modelPackage() + "." +  getBaseTypeOnly(name);
        }
    }

    @Override
    public String apiFilename(String templateName, String tag) {
        String suffix = apiTemplateFiles().get(templateName);

        String path = apiFileFolder() + File.separator + templateName.replace(".mustache","");
        path = path.replace("{{operation}}", tag);
        path = path.replace(".", File.separator);
        path +=  suffix;

        LOGGER.info("apiFilename:" + path);
        return  path;
    }

    @Override
    public String toModelName(final String name) {
        String modelName = modelNamePrefix + name + modelNameSuffix;
        //modelName = adjustGenericType(modelName);
        LOGGER.info("toModelName:" + modelName);
        return initialCaps(modelName);
    }


    @Override
    public String toModelFilename(String name) {
        LOGGER.info("toModelFilename:" + name);
        return initialCaps(getBaseTypeOnly(name));
    }



    @Override
    public void preprocessSwagger(Swagger swagger) {
        // From the title, compute a reasonable name for the package and the API
        String apiName = swagger.getInfo().getTitle();
        if(apiName.contains(" "))
            apiName = apiName.split(" ")[0];
        additionalProperties.put("apiName", apiName);
        LOGGER.info("apiName:" + apiName);
        super.preprocessSwagger(swagger);
    }


  
}
